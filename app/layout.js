import { M_PLUS_2 } from "next/font/google";
import "./globals.css";

const m_plus_2 = M_PLUS_2({ subsets: ["latin"] });

export const metadata = {
  title: "テニススクールのダミーサイトです",
  description: "日本全国で運営しているテニススクールという設定です。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={m_plus_2.className}>{children}</body>
    </html>
  );
}
