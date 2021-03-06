import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://localhost:5000",
    headers: {
      "content-type": "application/json",
      Authorization: JSON.parse(token)
    }
  });
};
