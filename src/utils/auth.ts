import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337/api";

/** ✅ 取得登入使用者資訊 */
export async function getUserProfile(token: string) {
  try {
    const res = await axios.get(`${API_URL}/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error("獲取使用者資料失敗", error);
    return null;
  }
}

/** ✅ 登入函式 */
export async function loginUser(identifier: string, password: string) {
  try {
    const res = await axios.post(`${API_URL}/auth/local`, {
      identifier,
      password,
    });
    return res.data;
  } catch (error) {
    console.error("登入失敗", error);
    return null;
  }
}

/** ✅ 註冊函式 */
export async function registerUser(username: string, email: string, password: string) {
  try {
    const res = await axios.post(`${API_URL}/auth/local/register`, {
      username,
      email,
      password,
    });
    return res.data;
  } catch (error) {
    console.error("註冊失敗", error);
    return null;
  }
}
