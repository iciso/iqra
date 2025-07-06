"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";

interface Player {
  id: string;
  username: string;
  full_name?: string;
  avatar_url?: string;
}

interface Category {
  id: string;
  label: string;
  description: string;
  icon: any;
  color: string;
  textColor: string;
  bgLight: string;
}

const challengeCategories = [
  { id: "fiqh", label: "Fiqh", description: "Islamic Jurisprudence", icon: null, color: "bg-blue-500", textColor: "text-blue-700", bgLight: "bg-blue-50" },
  { id: "quran", label: "Quran", description: "Quran Knowledge", icon: null, color: "bg-green-500", textColor: "text-green-700", bgLight: "bg-green-50" },
  { id: "hadeeth", label: "Hadeeth", description: "Prophetic Traditions", icon: null, color: "bg-amber-500", textColor: "text-amber-700", bgLight: "bg-amber-50" },
  { id: "seerah", label: "Seerah", description: "Prophet's Biography", icon: null, color: "bg-purple-500", textColor: "text-purple-700", bgLight: "bg-purple-50" },
  { id: "aqeedah", label: "Aqeedah", description: "Islamic Creed", icon: null, color: "bg-red-500", textColor: "text-red-700", bgLight: "bg-red-50" },
  { id: "tafsir", label: "Tafsir", description: "Quran Commentary", icon: null, color: "bg-indigo-500", textColor: "text-indigo-700", bgLight: "bg-indigo-50" },
];

const difficulties = [
  { value: "easy", label: "Easy" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "mixed", label: "Mixed" },
];

export default function CategoryFirstChallengeDialog({ isOpen, onClose, opponent }: { isOpen: boolean; onClose: () => void; opponent: Player }) {
  const { user } = useAuth();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>(challengeCategories[0].id);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>(difficulties[0].value);
  const [sending, setSending] = useState(false);

  const sendChallenge = async () => {
    if (!user?.id) {
      toast({ title: "Error", description: "You must be signed in", variant: "destructive" });
      return;
    }

    setSending(true);
    try {
      const challengeData = {
        challenger_id: user.id,
        challenged_id: opponent.id,
        category: selectedCategory,
        difficulty: selectedDifficulty,
        question_count: 10,
        time_limit: 300,
        status: "pending",
        expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      };

      const { data, error } = await supabase.from("user_challenges").insert(challengeData).select().single();
      if (error) throw error;

      const categoryLabel = challengeCategories.find((c) => c.id === selectedCategory)?.label || selectedCategory;
      toast({
        title: "Challenge Sent! 🎯",
        description: `${categoryLabel} challenge sent to ${opponent.full_name || opponent.username}`,
      });

      // Navigate to quiz with challenge ID
      if (data?.id) {
        router.push(`/quiz?category=${selectedCategory}&difficulty=${selectedDifficulty}&challenge=${data.id}&opponentId=${opponent.id}`);
      }
    } catch (error: any) {
      console.error("Challenge error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to send challenge",
        variant: "destructive",
      });
    } finally {
      setSending(false);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Challenge {opponent.full_name || opponent.username}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {challengeCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Difficulty</label>
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger>
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map((diff) => (
                  <SelectItem key={diff.value} value={diff.value}>
                    {diff.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={sending}>
            Cancel
          </Button>
          <Button onClick={sendChallenge} disabled={sending} className="bg-green-600 hover:bg-green-700">
            {sending ? "Sending..." : "Send Challenge"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
