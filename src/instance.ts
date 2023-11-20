import axios from "axios";

console.log(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api`, "api");
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_VERCEL_URL + "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// http.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = `Bearer sometoken`;
//     return config;
//   },
//   (err) => {
//     throw new Error(err);
//    // some action
//   }
// );

// const http = async <T>(url: string, options:) => {
//   return await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, options);
// };
export { instance as Api };
