import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lab em Aula – Roteiros que ensinam de verdade",
  description: "Atividades investigativas prontas para aplicar, com estrutura pedagógica completa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
