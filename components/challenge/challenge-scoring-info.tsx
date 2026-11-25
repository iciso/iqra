"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info, Trophy, Clock, X, CheckCircle } from "lucide-react"

const FAIR_POINTS = [1, 2, 3, 4, 5]

export default function ChallengeScoringInfo() {
  const { t } = useTranslation("challenges")
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 min-h-6 w-6 p-0 rounded-full">
          <Info className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            {t("scoring.title")}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {t("scoring.srDescription")}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Scoring Flow Diagram */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">{t("scoring.howTitle")}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 p-2 bg-green-50 dark:bg-green-950 rounded">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div className="flex-1">
                    <p className="font-medium">{t("scoring.bothTitle")}</p>
                    <p className="text-gray-600">{t("scoring.bothText")}</p>
                  </div>
                  <Badge className="bg-green-600">{t("scoring.bothBadge")}</Badge>
                </div>

                <div className="flex items-center gap-3 p-2 bg-blue-50 dark:bg-blue-950 rounded">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div className="flex-1">
                    <p className="font-medium">{t("scoring.waitTitle")}</p>
                    <p className="text-gray-600">{t("scoring.waitText")}</p>
                  </div>
                  <Badge variant="secondary">{t("scoring.waitBadge")}</Badge>
                </div>

                <div className="flex items-center gap-3 p-2 bg-orange-50 dark:bg-orange-950 rounded">
                  <X className="h-5 w-5 text-orange-600" />
                  <div className="flex-1">
                    <p className="font-medium">{t("scoring.declinedTitle")}</p>
                    <p className="text-gray-600">{t("scoring.declinedText")}</p>
                  </div>
                  <Badge variant="outline">{t("scoring.declinedBadge")}</Badge>
                </div>

                <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <div className="flex-1">
                    <p className="font-medium">{t("scoring.expiredTitle")}</p>
                    <p className="text-gray-600">{t("scoring.expiredText")}</p>
                  </div>
                  <Badge variant="outline">{t("scoring.expiredBadge")}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Badge System */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">{t("scoring.badgesTitle")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 p-2 border rounded">
                  <span className="text-lg">👑</span>
                  <div>
                    <p className="font-medium">{t("scoring.masterName")}</p>
                    <p className="text-gray-600">{t("scoring.masterText")}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 border rounded">
                  <span className="text-lg">🏆</span>
                  <div>
                    <p className="font-medium">{t("scoring.winnerName")}</p>
                    <p className="text-gray-600">{t("scoring.winnerText")}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 border rounded">
                  <span className="text-lg">🎯</span>
                  <div>
                    <p className="font-medium">{t("scoring.soloName")}</p>
                    <p className="text-gray-600">{t("scoring.soloText")}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 border rounded">
                  <span className="text-lg">💪</span>
                  <div>
                    <p className="font-medium">{t("scoring.persistentName")}</p>
                    <p className="text-gray-600">{t("scoring.persistentText")}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 border rounded">
                  <span className="text-lg">🚀</span>
                  <div>
                    <p className="font-medium">{t("scoring.initiatorName")}</p>
                    <p className="text-gray-600">{t("scoring.initiatorText")}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 border rounded">
                  <span className="text-lg">⏰</span>
                  <div>
                    <p className="font-medium">{t("scoring.patientName")}</p>
                    <p className="text-gray-600">{t("scoring.patientText")}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Benefits */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">{t("scoring.fairTitle")}</h3>
              <div className="space-y-2 text-sm">
                {FAIR_POINTS.map((n) => (
                  <div key={n} className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <p>
                      <strong>{t(`scoring.fair${n}b`)}</strong>
                      {t(`scoring.fair${n}`)}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button onClick={() => setOpen(false)} className="bg-green-600 hover:bg-green-700">
              {t("scoring.gotIt")}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
