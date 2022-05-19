import axios from "axios";

const hotelClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_LINK,
  timeout: 1000,
  headers: {},
});

export default hotelClient;
