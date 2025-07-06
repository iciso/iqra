"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Gamepad2,
  Users,
  Search,
  Trophy,
  Zap,
  RefreshCw,
  BookOpen,
  Scale,
  Scroll,
  ChurchIcon as Mosque,
  Heart,
  Star,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";
import ChallengeScoringInfo from "./challenge-scoring-info";
import { useAuth } from "@/contexts/auth-context";

interface User {
  id: string;
  username: string;
  full_name?: string;
  avatar_url?: string;
  total_score?: number;
  best_percentage?: number;
}

const challengeCategories = [
  {
    id: "fiqh",
    label: "Fiqh",
    description: "Islamic Jurisprudence",
    icon: Scale,
    color: "bg-blue-500 hover:bg-blue-600",
    textColor: "text-blue-700",
    bgLight: "bg-blue-50",
  },
  {
    id: "quran",
    label: "Quran",
    description: "Quran Knowledge",
    icon: BookOpen,
    color: "bg-green-500 hover:bg-green-600",
    textColor: "text-green-700",
    bgLight: "bg-green-50",
  },
  {
    id: "hadeeth",
    label: "Hadeeth",
    description: "Prophetic Traditions",
    icon: Scroll,
    color: "bg-amber-500 hover:bg-amber-600",
    textColor: "text-amber-700",
    bgLight: "bg-amber-50",
  },
  {
    id: "seerah",
    label: "Seerah",
    description: "Prophet's Biography",
    icon: Mosque,
    color: "bg-purple-500 hover:bg-purple-600",
    textColor: "text-purple-700",
    bgLight: "bg-purple-50",
  },
  {
    id: "aqeedah",
    label: "Aqeedah",
    description: "Islamic Creed",
    icon: Heart,
    color: "bg-red-500 hover:bg-red-600",
    textColor: "text-red-700",
    bgLight: "bg-red-50",
  },
  {
    id: "tafsir",
    label: "Tafsir",
    description: "Quran Commentary",
    icon: Star,
    color: "bg-indigo-500 hover:bg-indigo-600",
    textColor: "text-indigo-700",
    bgLight: "bg-indigo-50",
  },
];

const difficulties = [
  { value: "easy", label: "Easy", description: "Basic level questions" },
  { value: "intermediate", label: "Intermediate", description: "Moderate difficulty" },
  { value: "advanced", label: "Advanced", description: "Expert level questions" },
  { value: "mixed", label: "Mixed", description: "All difficulty levels" },
];

export default function CategoryFirstChallengeSender() {
  const { user, loading: authLoading } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState("mixed");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [topPlayers, setTopPlayers] = useState<User[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [topPlayersLoading, setTopPlayersLoading] = useState(false);
  const [sendingChallenge, setSendingChallenge] = useState<string | null>(null);

  useEffect(() => {
    if (user && !authLoading) {
      loadTopPlayers();
    }
  }, [user, authLoading]);

  const loadTopPlayers = async () => {
    if (!user) return;
    setTopPlayersLoading(true);

    try {
      const { data, error } = await supabase
        .from("user_profiles")
        .select("id, username, full_name, avatar_url, total_score, best_percentage")
        .neq("id", user.id)
        .order("total_score", { ascending: false })
        .order("best_percentage", { ascending: false })
        .limit(8);

      if (error) throw error;
      setTopPlayers(data || []);
    } catch (error: any) {
      console.error("Error loading top players:", error);
      toast({
        title: "Error",
        description: "Failed to load top players",
        variant: "destructive",
      });
    } finally {
      setTopPlayersLoading(false);
    }
  };

  const searchUsers = async (query: string) => {
    if (!query || query.length < 2) {
      setSearchResults([]);
      return;
    }

    if (!user) return;
    setSearchLoading(true);

    try {
      const { data, error } = await supabase
        .from("user_profiles")
        .select("id, username, full_name, avatar_url, total_score, best_percentage")
        .neq("id", user.id)
        .or(`username.ilike.%${query}%,full_name.ilike.%${query}%`)
        .limit(10);

      if (error) throw error;
      setSearchResults(data || []);
    } catch (error: any) {
      console.error("Error searching users:", error);
      toast({
        title: "Search Error",
        description: "Failed to search for users",
        variant: "destructive",
      });
    } finally {
      setSearchLoading(false);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    searchUsers(value);
  };

  const sendChallenge = async (challengedUser: User) => {
    if (!user) {
      toast({
        title: "Error",
        description: "You must be signed in to send challenges",
        variant: "destructive",
      });
      return;
    }

    if (!selectedCategory) {
      toast({
        title: "Select Category",
        description: "Please select a category before sending a challenge",
        variant: "destructive",
      });
      return;
    }

    setSendingChallenge(challengedUser.id);

    try {
      const challengeData = {
        challenger_id: user.id,
        challenged_id: challengedUser.id,
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
        description: `${categoryLabel} challenge sent to ${challengedUser.full_name || challengedUser.username}`,
      });

      setSearchQuery("");
      setSearchResults([]);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send challenge",
        variant: "destructive",
      });
    } finally {
      setSendingChallenge(null);
    }
  };

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

  if (authLoading) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="py-8">
            <div className="flex justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-green-500 border-t-transparent"></div>
              <span className="ml-2 text-sm text-gray-500">Loading...</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="py-8">
            <p className="text-center text-gray-500">Please sign in to use challenge features</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-dashed border-gray-300 dark:border-gray-600">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Gamepad2 className="h-6 w-6" />
            Step 1: Choose Your Challenge Category
          </CardTitle>
          <p className="text-gray-600 dark:text-gray-400">
            Select the Islamic knowledge area you want to challenge others in
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {challengeCategories.map((category) => {
              const IconComponent = category.icon;
              const isSelected = selectedCategory === category.id;

              return (
                <Card
                  key={category.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    isSelected
                      ? `ring-2 ring-offset-2 ring-blue-500 ${category.bgLight} border-blue-300`
                      : "hover:border-gray-400"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div
                      className={`mx-auto w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-3`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3
                      className={`font-semibold text-lg ${isSelected ? category.textColor : "text-gray-900 dark:text-gray-100"}`}
                    >
                      {category.label}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{category.description}</p>
                    {isSelected && <Badge className="mt-2 bg-blue-100 text-blue-800">Selected ✓</Badge>}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {selectedCategory && (
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-blue-800 dark:text-blue-200">
                  Challenge Settings for {challengeCategories.find((c) => c.id === selectedCategory)?.label}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block text-blue-800 dark:text-blue-200">
                    Difficulty Level
                  </label>
                  <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                    <SelectTrigger className="bg-white dark:bg-gray-800">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {difficulties.map((difficulty) => (
                        <SelectItem key={difficulty.value} value={difficulty.value}>
                          <div>
                            <div className="font-medium">{difficulty.label}</div>
                            <div className="text-xs text-gray-500">{difficulty.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <ChallengeScoringInfo />
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {selectedCategory && (
        <>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Step 2: Find Your Opponent
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-400">
                Search for users to challenge in {challengeCategories.find((c) => c.id === selectedCategory)?.label}
              </p>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by username or name..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="pl-10"
                  />
                  {searchLoading && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-green-500 border-t-transparent"></div>
                    </div>
                  )}
                </div>

                {searchResults.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-gray-700 dark:text-gray-300">Search Results</h4>
                    {searchResults.map((searchUser) => (
                      <div
                        key={searchUser.id}
                        className="flex items-center justify-between p-3 border rounded-lg dark:border-gray-600 min-w-0"
                      >
                        <div className="flex items-center space-x-3 min-w-0">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={searchUser.avatar_url || "/placeholder.svg"} />
                            <AvatarFallback className="bg-green-100 text-green-700">
                              {getUserInitials(searchUser)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0">
                            <p className="font-medium dark:text-white truncate">{searchUser.full_name || searchUser.username}</p>
                            <p className="text-sm text-gray-500 truncate">@{searchUser.username}</p>
                            {searchUser.best_percentage && (
                              <Badge variant="secondary" className="text-xs">
                                Best: {searchUser.best_percentage}%
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Button
                          onClick={() => sendChallenge(searchUser)}
                          disabled={sendingChallenge === searchUser.id}
                          className="bg-green-600 hover:bg-green-700 whitespace-nowrap"
                        >
                          {sendingChallenge === searchUser.id ? (
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          ) : (
                            <>
                              <Zap className="h-4 w-4 mr-1" />
                              Challenge
                            </>
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Or Challenge Top Players
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={loadTopPlayers}
                  disabled={topPlayersLoading}
                  className="h-8 w-8 p-0"
                >
                  <RefreshCw className={`h-4 w-4 ${topPlayersLoading ? "animate-spin" : ""}`} />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              {topPlayersLoading ? (
                <div className="flex justify-center py-8">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-green-500 border-t-transparent"></div>
                  <span className="ml-2 text-sm text-gray-500">Loading top players...</span>
                </div>
              ) : topPlayers.length === 0 ? (
                <div className="text-center py-4 text-gray-500">
                  <p>No other players found</p>
                  <Button onClick={loadTopPlayers} variant="outline" className="mt-2">
                    Refresh
                  </Button>
                </div>
              ) : (
                <div className="grid gap-3">
                  {topPlayers.map((player, index) => (
                    <div
                      key={player.id}
                      className="flex items-center justify-between p-3 border rounded-lg dark:border-gray-600 min-w-0"
                    >
                      <div className="flex items-center space-x-3 min-w-0">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={player.avatar_url || "/placeholder.svg"} />
                            <AvatarFallback className="bg-green-100 text-green-700">
                              {getUserInitials(player)}
                            </AvatarFallback>
                          </Avatar>
                          {index < 3 && (
                            <div className="absolute -top-1 -right-1 h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                              {index + 1}
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium dark:text-white truncate">{player.full_name || player.username}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {player.best_percentage || 0}%
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {player.total_score || 0} pts
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Button
                        onClick={() => sendChallenge(player)}
                        disabled={sendingChallenge === player.id}
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 whitespace-nowrap"
                      >
                        {sendingChallenge === player.id ? (
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        ) : (
                          <>
                            <Zap className="h-4 w-4 mr-1" />
                            Challenge
                          </>
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
