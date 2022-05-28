import api from "./api";

export const hotelSearch = async (term) => {
  try {
    const response = await api.get(`/hotel/search?term=${term}`);
    return response.data.data;
  } catch (error) {
    return error.message;
  }
};

export const hotelReviews = async (id) => {
  try {
    const response = await api.get(`/hotel/reviews?id=${id}`);
    return response.data.data;
  } catch (error) {
    return error.message;
  }
};

export const hotelPhotos = async (id) => {
  try {
    const response = await api.get(`/hotel/photos?id=${id}`);
    return response.data.data;
  } catch (error) {
    return error.message;
  }
};
