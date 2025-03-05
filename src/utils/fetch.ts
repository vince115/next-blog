export async function fetchFromStrapi(endpoint: string, token?: string) {
    const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337/api";
    
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    
    const res = await fetch(`${API_URL}/${endpoint}`, { headers });
    if (!res.ok) throw new Error(`Fetch failed: ${res.statusText}`);
    
    return res.json();
  }
  