"use client";

import { useMounted } from "@/hooks/use-mounted";
import { useTheme } from "next-themes";

export default function ThemeToggle() {

  const mounted = useMounted();
  const { theme, setTheme } = useTheme()

  return (
    <div>
      The current theme is: {mounted && theme}
      <br />
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <br />
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}
