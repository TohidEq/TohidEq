
"use client";

import { useSyncExternalStore } from "react";

// ======== Fix next-theme Errors ========== //
const emptySubscribe = () => () => {};       //
export  function useMounted() {              //
  return useSyncExternalStore(               //
    emptySubscribe,                          //
    () => true,                              //
    () => false                              //
  );                                         //
}                                            //
// ========================================= //
