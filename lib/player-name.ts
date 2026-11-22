// No login exists in this app: a player is the name they typed, kept in this browser.
// These keys are unchanged so existing players keep their scores and challenges.
export const PLAYER_NAME_KEY = "userNameForLeaderboard"
const CHALLENGER_ID_KEY = "tempChallengerId"

// Fired in this tab when the name is saved (the "storage" event only reaches other tabs).
export const PLAYER_NAME_EVENT = "iqra:player-name"

export const MIN_NAME_LENGTH = 2

export function readPlayerName(): string | null {
  try {
    return localStorage.getItem(PLAYER_NAME_KEY)
  } catch {
    return null
  }
}

/** Saves the name under both keys the app reads, then tells listeners (the header bell). */
export function savePlayerName(name: string): string {
  const trimmed = name.trim()
  try {
    localStorage.setItem(PLAYER_NAME_KEY, trimmed)
    localStorage.setItem(CHALLENGER_ID_KEY, trimmed)
  } catch {
    // Storage blocked (private mode): the name still works for this action.
  }
  window.dispatchEvent(new Event(PLAYER_NAME_EVENT))
  return trimmed
}

/** For useSyncExternalStore: re-read the name when it changes here or in another tab. */
export function subscribePlayerName(onChange: () => void) {
  window.addEventListener("storage", onChange)
  window.addEventListener(PLAYER_NAME_EVENT, onChange)
  return () => {
    window.removeEventListener("storage", onChange)
    window.removeEventListener(PLAYER_NAME_EVENT, onChange)
  }
}
