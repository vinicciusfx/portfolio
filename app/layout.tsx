import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeScript } from "@/components/theme-script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pedro Vinicius | Portfolio",
  description:
    "Portfolio de Pedro Vinicius, programador de jogos com foco em gameplay, LiveOps, VFX e infraestrutura para jogos em produção.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <div className="relative isolate flex min-h-screen flex-col">
          <Header />
          <main className="relative z-10 flex-1 pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
