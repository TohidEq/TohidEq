"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()


  const [mounted, setMounted] = useState(false);

  const aa = useRef(true)
  useEffect(() => {
    setMounted(aa.current);
  }, []);

  if (!mounted) return <div className="size-6" />;

  return (
    <div>
      The current theme is: {theme}
      <br />
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <br />
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}
