import axios from "axios";

// Use environment variable for backend URL
const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api/users`;

export const registerUser = async (formData) => {
  return await axios.post(`${API_URL}/register`, formData);
};

export const getUsers = async () => {
  return await axios.get(`${API_URL}/all`);
};
