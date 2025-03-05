"use client";
import { useState } from "react";
import { loginUser } from "@/utils/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e:any)=>{
    e.preventDefault();
    setError("");

    const user = await loginUser(form.identifier, form.password);

    if (user) {
      document.cookie = `token=${user.jwt}; path=/;`;
      alert("登入成功！");
      router.push("/profile"); // ✅ 登入後跳轉到個人頁面
    } else {
      setError("登入失敗，請檢查帳號或密碼");
    }
  };

  return (
    <div>
      <h1>登入</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email or Username"
          required
          onChange={(e) => setForm({ ...form, identifier: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">登入</button>
      </form>
    </div>
  );
}
