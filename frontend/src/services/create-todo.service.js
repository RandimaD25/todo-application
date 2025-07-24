import axios from "axios";
import { backendUrl } from "../config";

export const createTodo = async ({ title, description }) => {
  try {
    const { data } = await axios.post(`${backendUrl}/api/task/create-todo`, {
      title,
      description,
    });

    return data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
