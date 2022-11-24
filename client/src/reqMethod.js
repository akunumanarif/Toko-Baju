import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2E3MjBlYThkOGI0OWJkZWUxODI3OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTEyNDc4OCwiZXhwIjoxNjY5MzgzOTg4fQ.cC-PgWHiyigNBTVLg5g0b8yIA4UQDtSjDvaixWEn_E8";

export const publicReq = axios.create({
  baseURL: BASE_URL,
});
export const userReq = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
