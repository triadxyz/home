"use client";

import { GlobalProvider } from "./global";
import { SwapProvider } from "./swap";

interface Props {
  children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <GlobalProvider>
      <SwapProvider>{children}</SwapProvider>
    </GlobalProvider>
  );
};

export default AppProvider;
