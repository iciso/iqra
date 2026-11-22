// Display names for challenge subjects (category ids stored on challenges).
export const challengeCategoryLabels: Record<string, string> = {
  quran: "Quran Knowledge",
  seerah: "Seerah",
  fiqh: "Fiqh",
  hadeeth: "Hadeeth",
  aqeedah: "Aqeedah",
  tafsir: "Tafsir",
  comparative: "Comparative Religion",
  "islamic-finance": "Islamic Finance",
  tazkiyah: "Tazkiyah",
  history: "Islamic History",
  dawah: "Dawah",
  salah: "Salah",
  sawm: "Sawm",
  "new-muslims": "New Muslims",
  "islamic-medical-ethics": "Islamic Medical Ethics",
  crypto: "Crypto & Islam",
  gender: "Gender in Islam",
  lgbtq: "LGBTQ & Islam",
  psych: "Islamic Psychology",
  parenting: "Islamic Parenting",
  peace: "Peace & Islam",
  christ: "Christianity & Islam",
  hindu: "Hinduism & Islam",
}

export const challengeCategoryLabel = (id: string) => challengeCategoryLabels[id] || id

/** "3h 12m left". Client-only: it reads the current time. */
export function formatTimeLeft(dateString: string) {
  const diffMs = new Date(dateString).getTime() - Date.now()
  if (diffMs <= 0) return "Expired"
  const hours = Math.floor(diffMs / (1000 * 60 * 60))
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
  return hours > 0 ? `${hours}h ${minutes}m left` : `${minutes}m left`
}
