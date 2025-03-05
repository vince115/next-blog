import { getUserProfile } from "@/utils/auth";
import { cookies } from "next/headers";

export default async function ProfilePage() {
  const token = (await cookies()).get("token")?.value;
  if (!token) return <p>請先登入</p>;

  const user = await getUserProfile(token);

  return (
    <div>
      {user ? (
        <h1>歡迎, {user.username}！</h1>
      ) : (
        <p>獲取使用者資料失敗</p>
      )}
    </div>
  );
}
