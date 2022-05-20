import api from "./api";

export const hotelSearch = async () => {
  try {
    const response = await api.post("/hotel/search");
    return response.data;
  } catch (error) {
    return error.message;
  }
};
