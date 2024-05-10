import { PublicKey } from "@solana/web3.js";

export const validateSolanaAddress = (walletAddress: string): boolean => {
  try {
    const recipientPubKey = new PublicKey(walletAddress);
    return PublicKey.isOnCurve(recipientPubKey);
  } catch {
    return false;
  }
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
