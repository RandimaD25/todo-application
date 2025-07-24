import axios from "axios";
import { backendUrl } from "../config";

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
