import {
  JetBrains_Mono as FontMono,
  Cabin as FontSans,
  Merriweather as FontSerif,
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "700", "900"],
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
