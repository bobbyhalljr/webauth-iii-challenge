import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://web-auth-project-3.herokuapp.com",
    headers: {
      "content-type": "application/json",
      Authorization: token
    }
  });
};
