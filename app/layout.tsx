import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "学習サポート",
  description: "LINEで気軽に相談できる高校生向け学習サポートサービス"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
