import { createContext, useContext } from "react";

export const LoadingContext = createContext(null);

export function useLoading() {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }

  return context;
}
