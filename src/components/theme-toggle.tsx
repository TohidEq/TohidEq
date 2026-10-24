"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  // ======== Fix next-theme Errors ========== //
  const emptySubscribe = () => () => {};       //
  function useMounted() {                      //
    return useSyncExternalStore(               //
      emptySubscribe,                          //
      () => true,                              //
      () => false                              //
    );                                         //
  }                                            //
  // ========================================= //

  return (
    <div>
      The current theme is: {useMounted() && theme}
      <br />
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <br />
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}
