"use client"; // 必須是 client component
import { useState } from "react";
import { registerUser } from "@/utils/auth";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError("");

    const user = await registerUser(form.username, form.email, form.password);

    if (user) {
      document.cookie = `token=${user.jwt}; path=/;`;
      alert("註冊成功！已自動登入");
      router.push("/profile"); // ✅ 註冊成功後跳轉到 `/profile`
    } else {
      setError("註冊失敗，請檢查輸入資訊");
    }
  };

  return (
    <div className="container">
      <h1>註冊</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          required
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">註冊</button>
      </form>
    </div>
  );
}
