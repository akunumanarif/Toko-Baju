import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "http://localhost:5000/api/"

export const publicReq = axios.create({
    baseURL = BASE_URL
})
export const userReq = axios.create({
    baseURL = BASE_URL,
    headers = {token: "Bearer" }
})