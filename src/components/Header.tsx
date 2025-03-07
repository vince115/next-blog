"use client"; // 這是 Client Component
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-2xl font-bold">
          Next.js Blog
        </Link>
        <nav>
          <Link href="/" className="mx-4 hover:underline">部落格</Link>
          <Link href="/auth/login" className="mx-4 hover:underline">登入</Link>
          <Link href="/auth/register" className="mx-4 hover:underline">註冊</Link>
        </nav>
      </div>
    </header>
  );
}
