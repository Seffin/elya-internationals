"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) return null

  return (
    <div className="flex items-center space-x-2 bg-secondary/50 rounded-full p-1 border border-border">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full transition-colors ${theme === "light"
            ? "bg-background shadow-sm text-foreground"
            : "text-muted-foreground hover:text-foreground"
          }`}
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-full transition-colors ${theme === "system"
            ? "bg-background shadow-sm text-foreground"
            : "text-muted-foreground hover:text-foreground"
          }`}
        aria-label="System mode"
      >
        <Monitor className="h-4 w-4" />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full transition-colors ${theme === "dark"
            ? "bg-background shadow-sm text-foreground"
            : "text-muted-foreground hover:text-foreground"
          }`}
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  )
}