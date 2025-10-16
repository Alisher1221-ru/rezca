import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_API;

export async function api(
  url: string,
  data?: any,
  method: "GET" | "POST" = "GET"
) {
  return await axios({ method, baseURL, url, data });
}
