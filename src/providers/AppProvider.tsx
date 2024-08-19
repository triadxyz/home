"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

// import { Container } from './styles';

const AppProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AppProvider;
