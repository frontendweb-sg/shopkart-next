import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VERCEL_URL,
});

export { instance as Api };
