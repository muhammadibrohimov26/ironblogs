import type { Metadata } from "next";
import { Inter, Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const creteRound = Crete_Round({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-creteRound',
})

const workSans = Work_Sans({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font--workSans',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

 function RootLayout( {children}: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${creteRound.variable} ${workSans.variable} owerflow-x-hidden`  }>
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
              {children}
        </ThemeProvider>
       </body>
    </html>
  );
}
export default RootLayout
