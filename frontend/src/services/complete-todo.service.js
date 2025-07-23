import axios from "axios";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const completeTodo = async ({ id }) => {
  try {
    const { data } = await axios.put(
      `${backendUrl}/api/task/complete-todo/${id}`
    );

    return data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
