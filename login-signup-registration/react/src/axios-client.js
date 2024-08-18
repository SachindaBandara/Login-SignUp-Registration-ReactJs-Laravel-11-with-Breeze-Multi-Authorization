import axois from "axios";

const axiosClient = axois.create ({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})
