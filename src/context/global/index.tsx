"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import api from "@/constants/api";

type GlobalProviderProps = {
  children: ReactNode;
};

export type GlobalStake = {
  tvl: number;
  volume30d: number;
  markets: number;
  floorPrice: number;
  nftStaked: number;
  tokensStaked: number;
};

export type GlobalContextValue = {
  loadingValues: boolean;
  getGlobalStake: () => Promise<void>;
  globalStake: GlobalStake | undefined;
};

export const GlobalContext = createContext<GlobalContextValue | undefined>(
  undefined
);

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [loadingValues, setLoadingValues] = useState(false);
  const [globalStake, setGlobalStake] = useState<GlobalStake | undefined>(undefined);

  const getGlobalStake = useCallback(async () => {
    setLoadingValues(true);

    try {
      const response = await api.get("/stats");
      setGlobalStake(response.data);
    } catch {
      /* empty */
    } finally {
      setLoadingValues(false);
    }
  }, []);



  const value = useMemo(
    () => ({
      loadingValues,
      getGlobalStake,
      globalStake,
    }),
    [loadingValues, getGlobalStake, globalStake]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export const useGlobal = (): GlobalContextValue => {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }

  return context;
};
