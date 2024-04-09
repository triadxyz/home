import { Poppins, Source_Code_Pro } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500"],
});
