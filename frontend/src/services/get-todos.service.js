import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const getTodos = async () => {
  try {
    const { data } = await axios.get(`${backendUrl}/api/task/get-todos`);
    return data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
