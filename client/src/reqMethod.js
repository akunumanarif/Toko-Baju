import axios from "axios";

const BASE_URL = "https://doubtful-tuxedo-slug.cyclic.app/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2E3MjBlYThkOGI0OWJkZWUxODI3OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTgwNzk0OSwiZXhwIjoxNjcwMDY3MTQ5fQ.870YiGAH07SwNZ--QHd48mOq1v4xGUyNeKcUPlkNA00";

// const checkToken = (token) => {
//   if (token === TOKEN) {
//     console.log("Token Exist");
//   } else {
//     console.log("Token does not exist");
//   }
// };

export const publicReq = axios.create({
  baseURL: BASE_URL,
});
export const userReq = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
