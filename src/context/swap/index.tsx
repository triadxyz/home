"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";
import type { ReactNode } from "react";

type SwapProviderProps = {
  children: ReactNode;
};

export type SwapContextValue = {
  triadValue: number;
  solValue: number;
  loading: boolean;
};

const SwapContext = createContext<SwapContextValue | undefined>(undefined);

export function SwapProvider({ children }: SwapProviderProps) {
  const [triadValue, setTriadValue] = useState(0);
  const [solValue, setSolValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const getQuote = useCallback(async () => {
    const currentAmount = 1000000;
    const fromMintAsset = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
    const toMintAsset = "t3DohmswhKk94PPbPYwA6ZKACyY3y5kbcqeQerAJjmV";

    try {
      const res = await axios.get(
        `https://quote-api.jup.ag/v6/quote?inputMint=${fromMintAsset}&outputMint=${toMintAsset}&amount=${currentAmount}&slippageBps=10&computeAutoSlippage=true&swapMode=ExactIn&onlyDirectRoutes=false&asLegacyTransaction=false&maxAccounts=64&minimizeSlippage=false&experimentalDexes=Jupiter%20LO`
      );

      const quote = res.data;

      if (quote && quote.outAmount) {
        const outAmountNumber = Number(quote.outAmount) / 10 ** 6;
        const inAmountNumber = Number(quote.inAmount) / 10 ** 6;

        const tokenValueInUSDC = inAmountNumber / outAmountNumber;
        setTriadValue(tokenValueInUSDC);
      }
    } catch {
      /* empty */
    }
  }, []);

  const getQuoteSolUsdc = useCallback(async () => {
    const currentAmount = 1000000;
    const fromMintAsset = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
    const toMintAsset = "So11111111111111111111111111111111111111112";

    try {
      const res = await axios.get(
        `https://quote-api.jup.ag/v6/quote?inputMint=${fromMintAsset}&outputMint=${toMintAsset}&amount=${currentAmount}&slippageBps=10&computeAutoSlippage=true&swapMode=ExactIn&onlyDirectRoutes=false&asLegacyTransaction=false&maxAccounts=64&minimizeSlippage=false&experimentalDexes=Jupiter%20LO`
      );

      const quote = res.data;

      if (quote && quote.outAmount) {
        const outAmountNumber = Number(quote.outAmount) / 10 ** 9;
        const inAmountNumber = Number(quote.inAmount) / 10 ** 6;

        const tokenValueInUSDC = inAmountNumber / outAmountNumber;
        setSolValue(tokenValueInUSDC);
      }
    } catch {
      /* empty */
    }
  }, []);

  useEffect(() => {
    const fetchQuotes = async () => {
      await Promise.all([getQuote(), getQuoteSolUsdc()]);
      setLoading(false);
    };
    
    fetchQuotes();
  }, [getQuote, getQuoteSolUsdc]);

  const value = useMemo(
    () => ({ triadValue, solValue, loading }),
    [triadValue, solValue, loading]
  );

  return (
    <SwapContext.Provider value={value}>{children}</SwapContext.Provider>
  );
}

export const useSwap = (): SwapContextValue => {
  const context = useContext(SwapContext);

  if (context === undefined) {
    throw new Error("useSwap must be used within a SwapProvider");
  }

  return context;
};
