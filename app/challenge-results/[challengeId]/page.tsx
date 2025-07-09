"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Crown, Medal, ArrowLeft, Zap } from "lucide-react";
import { getChallenge } from "@/lib/supabase-queries";
import { useAuth } from "@/contexts/auth-context";
import Link from "next/link";

export default function ChallengeResultsPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [challenge, setChallenge] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.challengeId) {
      loadChallenge();
    }
  }, [params.challengeId]);

  const loadChallenge = async () => {
    try {
      const challengeData = await getChallenge(params.challengeId as string);
      setChallenge(challengeData);
      // Save scores to Supabase after loading
      if (challengeData.challenger_score && challengeData.challenged_score) {
        await saveChallengeScores(challengeData);
      }
    } catch (error) {
      console.error("Error loading challenge:", error);
    } finally {
      setLoading(false);
    }
  };

  const saveChallengeScores = async (challengeData: any) => {
    try {
      const response = await fetch("/api/update-challenge-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          challengeId: params.challengeId,
          challengerId: challengeData.challenger.id,
          challengerScore: challengeData.challenger_score,
          challengedId: challengeData.challenged.id,
          challengedScore: challengeData.challenged_score,
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to update scores");
      console.log("Scores saved:", result.message);
    } catch (error) {
      console.error("Error saving scores:", error);
    }
  };

  const getUserInitials = (profile: any) => {
    if (profile?.full_name) {
      return profile.full_name
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase();
    }
    return profile?.username?.charAt(0).toUpperCase() || "U";
  };

  const getWinner = () => {
    if (!challenge || !challenge.challenger_score || !challenge.challenged_score) return null;

    if (challenge.challenger_score > challenge.challenged_score) {
      return { winner: challenge.challenger, loser: challenge.challenged, type: "challenger" };
    } else if (challenge.challenged_score > challenge.challenger_score) {
      return { winner: challenge.challenged, loser: challenge.challenger, type: "challenged" };
    } else {
      return { winner: null, loser: null, type: "tie" };
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-500 border-t-transparent mx-auto mb-4"></div>
          <p>Loading challenge results...</p>
        </div>
      </div>
    );
  }

  if (!challenge) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="text-center py-8">
            <p>Challenge not found</p>
            <Link href="/challenges">
              <Button className="mt-4">Back to Challenges</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const result = getWinner();
  const isUserWinner = result?.winner?.id === user?.id;

  const handleViewLeaderboard = () => {
    router.push("/leaderboard?refresh=true"); // Trigger refresh
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        <div className="mb-6">
          <Link href="/challenges">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Challenges
            </Button>
          </Link>
        </div>

        <Card className="mb-6">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {result?.type === "tie" ? (
                <Medal className="h-16 w-16 text-yellow-500" />
              ) : (
                <Trophy className="h-16 w-16 text-yellow-500" />
              )}
            </div>
            <CardTitle className="text-3xl font-bold">
              {result?.type === "tie" ? "It's a Tie!" : isUserWinner ? "You Won! 🎉" : "Challenge Complete"}
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-400">
              {challenge.category} • {challenge.difficulty} • {challenge.question_count} questions
            </p>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Challenger */}
          <Card className={`${result?.type === "challenger" ? "ring-2 ring-yellow-500" : ""}`}>
            <CardHeader className="text-center">
              {result?.type === "challenger" && <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />}
              <Avatar className="h-20 w-20 mx-auto mb-4">
                <AvatarImage src={challenge.challenger?.avatar_url || "/placeholder.svg"} />
                <AvatarFallback className="bg-green-100 text-green-700 text-xl">
                  {getUserInitials(challenge.challenger)}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold">{challenge.challenger?.full_name || challenge.challenger?.username}</h3>
              <Badge variant="outline">Challenger</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{challenge.challenger_score || 0}</div>
              <p className="text-gray-600">out of {challenge.question_count}</p>
              <div className="mt-4">
                <Badge variant="secondary">
                  {Math.round(((challenge.challenger_score || 0) / challenge.question_count) * 100)}%
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Challenged */}
          <Card className={`${result?.type === "challenged" ? "ring-2 ring-yellow-500" : ""}`}>
            <CardHeader className="text-center">
              {result?.type === "challenged" && <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />}
              <Avatar className="h-20 w-20 mx-auto mb-4">
                <AvatarImage src={challenge.challenged?.avatar_url || "/placeholder.svg"} />
                <AvatarFallback className="bg-blue-100 text-blue-700 text-xl">
                  {getUserInitials(challenge.challenged)}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold">{challenge.challenged?.full_name || challenge.challenged?.username}</h3>
              <Badge variant="outline">Challenged</Badge>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{challenge.challenged_score || 0}</div>
              <p className="text-gray-600">out of {challenge.question_count}</p>
              <div className="mt-4">
                <Badge variant="secondary">
                  {Math.round(((challenge.challenged_score || 0) / challenge.question_count) * 100)}%
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center space-y-4">
          <Button onClick={() => router.push("/challenges")} className="bg-green-600 hover:bg-green-700">
            <Zap className="h-4 w-4 mr-2" />
            New Challenge
          </Button>
          <div>
            <Button onClick={handleViewLeaderboard} variant="outline">
              <Trophy className="h-4 w-4 mr-2" />
              View Leaderboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
