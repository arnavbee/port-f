"use client";

import { createContext, useState, useContext, useEffect, ReactNode } from "react";

export const SpaceModeContext = createContext<{ isSpaceMode: boolean; toggleSpaceMode: () => void }>({
  isSpaceMode: false,
  toggleSpaceMode: () => {},
});

export const SpaceModeProvider = ({ children }: { children: ReactNode }) => {
  const [isSpaceMode, setIsSpaceMode] = useState(false);

  useEffect(() => {
    if (isSpaceMode) {
      document.documentElement.classList.add("space-mode");
    } else {
      document.documentElement.classList.remove("space-mode");
    }
  }, [isSpaceMode]);

  return (
    <SpaceModeContext.Provider value={{ isSpaceMode, toggleSpaceMode: () => setIsSpaceMode(!isSpaceMode) }}>
      {children}
    </SpaceModeContext.Provider>
  );
};

export const useSpaceMode = () => useContext(SpaceModeContext);
