import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/global.css"; // 確保有全域樣式

export const metadata: Metadata = {
  title: "Next.js Blog",
  description: "一個使用 Next.js 和 Strapi 建立的部落格",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body>
        <Header />
        <main className="container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
