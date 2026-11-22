"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MIN_NAME_LENGTH, savePlayerName } from "@/lib/player-name"

/** Asks for the player's name in place, saves it under the usual keys, then hands it back. */
export default function InlineNamePrompt({ onSaved }: { onSaved: (name: string) => void }) {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")

  const save = () => {
    if (value.trim().length < MIN_NAME_LENGTH) {
      setError(`Please enter at least ${MIN_NAME_LENGTH} characters`)
      return
    }
    onSaved(savePlayerName(value))
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        save()
      }}
      className="space-y-2"
    >
      <label htmlFor="inline-player-name" className="block text-sm font-medium">
        What is your name? Your friend will see it on the challenge.
      </label>
      <div className="flex gap-2">
        <Input
          id="inline-player-name"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setError("")
          }}
          placeholder="Your name"
          autoComplete="nickname"
          maxLength={255}
          className="h-11 flex-1"
          autoFocus
        />
        <Button type="submit" className="h-11 bg-green-600 hover:bg-green-700">
          Save
        </Button>
      </div>
      {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}
    </form>
  )
}
