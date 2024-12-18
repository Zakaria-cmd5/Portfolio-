import Cursor from "@/components/cursor/Cursor";
import GrainEffect from "@/components/visualEffect/GrainEffect";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const mainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const oswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const pixelifyFont = Pixelify_Sans({ subsets: ["latin"], variable: "--font-pixel" });

export const metadata: Metadata = {
  title: "Zakaria Asad",
  description: "Zakaria Asad official protofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(mainFont.className, oswaldFont.variable, pixelifyFont.variable)}>
        <GrainEffect />
        <Cursor color="#fff"/>
        {children}
      </body>
    </html>
  );
}
