import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin-ext'] });

export const metadata: Metadata = {
  title: "Личный кабинет сотрудника",
  description: "Тестовое задание для Aspirity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${poppins.className} main-container bg-dark-primary-bg text-dark-primary-text`}>
        {children}
      </body>
    </html>
  );
}
