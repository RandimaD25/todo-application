import axios from "axios";
import { backendUrl } from "../config";

export const getTodos = async () => {
  try {
    const { data } = await axios.get(`${backendUrl}/api/task/get-todos`);
    return data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
