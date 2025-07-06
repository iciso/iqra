"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Gamepad2,
  Zap,
  BookOpen,
  Scale,
  Scroll,
  ChurchIcon as Mosque,
  Heart,
  Star,
  Trophy,
  Clock,
  Target,
  History,
  Sparkles,
  Users,
  Globe,
  Landmark,
  AlertCircle,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  username: string;
  full_name?: string;
  avatar_url?: string;
  total_score?: number;
  best_percentage?: number;
}

interface CategoryFirstChallengeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  opponent: User;
}

const challengeCategories = [
  // ... (same as provided)
];

const difficulties = [
  { value: "easy", label: "Easy", description: "Basic level questions", emoji: "🟢" },
  { value: "intermediate", label: "Intermediate", description: "Moderate difficulty", emoji: "🟡" },
  { value: "advanced", label: "Advanced", description: "Expert level questions", emoji: "🔴" },
  { value: "mixed", label: "Mixed", description: "All difficulty levels", emoji: "🌈" },
];

export default function CategoryFirstChallengeDialog({ isOpen, onClose, opponent }: CategoryFirstChallengeDialogProps) {
  const { user } = useAuth();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState("mixed");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [challengeSent, setChallengeSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getUserInitials = (user: User) => {
    if (user.full_name) {
      return user.full_name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    }
    return user.username.charAt(0).toUpperCase();
  };

  const handleSendChallenge = async () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to challenge other players",
        variant: "destructive",
      });
      return;
    }

    if (!selectedCategory) {
      toast({
        title: "Select Category",
        description: "Please select a category before sending the challenge",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      console.log(`🎯 Creating challenge: ${opponent.full_name || opponent.username} (${opponent.id})`);
      console.log(`🎯 Challenge details:`, {
        category: selectedCategory,
        difficulty: selectedDifficulty,
        questionCount: 10,
        timeLimit: 300,
      });

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

      const { data: challenge, error } = await supabase
        .from("user_challenges")
        .insert(challengeData)
        .select()
        .single();

      if (error) throw error;

      console.log(`✅ Challenge created successfully:`, challenge);

      setChallengeSent(true);

      const categoryLabel = challengeCategories.find((c) => c.id === selectedCategory)?.label || selectedCategory;
      toast({
        title: "Challenge Created! 🎯",
        description: `${categoryLabel} challenge sent to ${opponent.full_name || opponent.username}. Take your quiz now!`,
      });

      setTimeout(() => {
        const challengeUrl = `/quiz?category=${encodeURIComponent(selectedCategory)}&difficulty=${encodeURIComponent(selectedDifficulty)}&challenge=${challenge.id}&questions=10&opponentId=${opponent.id}&opponentName=${encodeURIComponent(opponent.full_name || opponent.username)}&challengerTurn=true`;
        console.log(`🔗 Redirecting challenger to:`, challengeUrl);
        router.push(challengeUrl);
      }, 1500);
    } catch (error: any) {
      console.error("❌ Error sending challenge:", error);
      setError(error.message || "Failed to send challenge. Please try again.");
      toast({
        title: "Error",
        description: error.message || "Failed to send challenge",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting && !challengeSent) {
      setSelectedCategory(null);
      setSelectedDifficulty("mixed");
      setError(null);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl">
            <Gamepad2 className="h-6 w-6 text-green-600" />
            Challenge {opponent.full_name || opponent.username}
          </DialogTitle>
        </DialogHeader>
        {/* ... (rest of the JSX same as provided) */}
      </DialogContent>
    </Dialog>
  );
}
