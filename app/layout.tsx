import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "中高生向けオンライン学習サポート",
  description: "動画教材とオンラインコーチングで学習を続けやすくする中高生向けサポートサービス"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
