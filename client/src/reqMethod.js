import axios from "axios";

const BASE_URL = "https://doubtful-tuxedo-slug.cyclic.app/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;

export const publicReq = axios.create({
  baseURL: BASE_URL,
});
export const userReq = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
