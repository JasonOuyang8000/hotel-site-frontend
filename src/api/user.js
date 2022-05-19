import api from "./api";

export const registerUser = async () => {
  try {
    const response = await api.post("/user/register");
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const getUser = async () => {
  try {
    const response = await api.get("/user/profile");
    return response.data;
  } catch (error) {
    return error.message;
  }
};
