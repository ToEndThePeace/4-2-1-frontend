import axios from "axios";
export const axiosWithConfig = () => {
  return axios.create({ baseURL: "https://backend-421.herokuapp.com/" });
};
