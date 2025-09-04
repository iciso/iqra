"use client"

import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { RefreshCw, Globe, Home, Trophy, Award, User, Info } from "lucide-react"
import { useEffect, useState } from "react"

export default function I18nDemoPage() {
  const { t, i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const [currentLang, setCurrentLang] = useState("en")

  useEffect(() => {
    setMounted(true)
    setCurrentLang(i18n.language)

    // Listen for language changes
    const handleLanguageChange = (lng: string) => {
      setCurrentLang(lng)
    }

    i18n.on("languageChanged", handleLanguageChange)

    return () => {
      i18n.off("languageChanged", handleLanguageChange)
    }
  }, [i18n])

  const refreshPage = () => {
    window.location.reload()
  }

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ta" : "en"
    i18n.changeLanguage(newLang)
    localStorage.setItem("language", newLang)
  }

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading i18n demo...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-green-600">
          {currentLang === "en" ? "i18n Translation Demo" : "i18n மொழிபெயர்ப்பு டெமோ"}
        </h1>
        <p className="text-lg text-gray-600">
          {currentLang === "en" ? "Test language switching and persistence" : "மொழி மாற்றம் மற்றும் நிலைத்தன்மையை சோதிக்கவும்"}
        </p>
      </div>

      {/* Language Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            {currentLang === "en" ? "Language Controls" : "மொழி கட்டுப்பாடுகள்"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button onClick={toggleLanguage} variant="outline">
              <Globe className="h-4 w-4 mr-2" />
              {currentLang === "en" ? "Switch to தமிழ்" : "Switch to English"}
            </Button>
            <Button onClick={refreshPage} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              {currentLang === "en" ? "Refresh Page" : "பக்கத்தை புதுப்பிக்கவும்"}
            </Button>
          </div>
          <div className="space-y-2">
            <p>
              <strong>{currentLang === "en" ? "Current Language:" : "தற்போதைய மொழி:"}</strong>
              <Badge variant="secondary" className="ml-2">
                {currentLang}
              </Badge>
            </p>
            <p>
              <strong>{currentLang === "en" ? "Stored in localStorage:" : "localStorage இல் சேமிக்கப்பட்டது:"}</strong>
              <Badge variant="outline" className="ml-2">
                {localStorage.getItem("language") || "none"}
              </Badge>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Translations */}
      <Card>
        <CardHeader>
          <CardTitle>
            {t("nav.home")} - {currentLang === "en" ? "Navigation Translations" : "வழிசெலுத்தல் மொழிபெயர்ப்புகள்"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span>{t("nav.home")}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📚</span>
              <span>{t("nav.categories")}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⚔️</span>
              <span>{t("nav.challenges")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              <span>{t("nav.leaderboard")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>{t("nav.badges")}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{t("nav.profile")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              <span>{t("nav.about")}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔐</span>
              <span>{t("nav.signIn")}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Home Page Content */}
      <Card>
        <CardHeader>
          <CardTitle>{currentLang === "en" ? "Home Page Content" : "முகப்பு பக்க உள்ளடக்கம்"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">{t("home.title")}</h2>
            <p className="text-gray-600">{t("home.subtitle")}</p>
          </div>

          <Separator />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{t("home.learningMode.title")}</h3>
              <p className="text-gray-600">{t("home.learningMode.description")}</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {t("home.learningMode.features", { returnObjects: true }).map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Button>{t("home.learningMode.button")}</Button>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{t("home.challengeMode.title")}</h3>
              <p className="text-gray-600">{t("home.challengeMode.description")}</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {t("home.challengeMode.features", { returnObjects: true }).map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Button>{t("home.challengeMode.button")}</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Debug Information */}
      <Card>
        <CardHeader>
          <CardTitle>{currentLang === "en" ? "Debug Information" : "பிழைத்திருத்த தகவல்"}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm font-mono">
            <p>
              <strong>i18n.language:</strong> {i18n.language}
            </p>
            <p>
              <strong>i18n.isInitialized:</strong> {i18n.isInitialized.toString()}
            </p>
            <p>
              <strong>localStorage language:</strong> {localStorage.getItem("language") || "null"}
            </p>
            <p>
              <strong>Available languages:</strong> {i18n.languages.join(", ")}
            </p>
            <p>
              <strong>Fallback language:</strong> {i18n.options.fallbackLng}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Test Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>{currentLang === "en" ? "Test Instructions" : "சோதனை வழிமுறைகள்"}</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              {currentLang === "en"
                ? "Switch language using the button above"
                : "மேலே உள்ள பொத்தானைப் பயன்படுத்தி மொழியை மாற்றவும்"}
            </li>
            <li>
              {currentLang === "en"
                ? "Observe all text changing to the selected language"
                : "தேர்ந்தெடுக்கப்பட்ட மொழிக்கு அனைத்து உரையும் மாறுவதைக் கவனிக்கவும்"}
            </li>
            <li>
              {currentLang === "en"
                ? "Click 'Refresh Page' to test persistence"
                : "நிலைத்தன்மையை சோதிக்க 'பக்கத்தை புதுப்பிக்கவும்' என்பதைக் கிளிக் செய்யவும்"}
            </li>
            <li>
              {currentLang === "en"
                ? "Verify the language persists after refresh"
                : "புதுப்பித்த பிறகு மொழி நிலைத்திருப்பதை சரிபார்க்கவும்"}
            </li>
            <li>
              {currentLang === "en"
                ? "Navigate to other pages and verify language persists"
                : "மற்ற பக்கங்களுக்குச் சென்று மொழி நிலைத்திருப்பதை சரிபார்க்கவும்"}
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
