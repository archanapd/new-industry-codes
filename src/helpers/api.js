import axios from "axios";

export const callAPI = ({
  method,
  resource,
  params = {},
  data = {},
  success = (data) => data,
  error = (data) => data,
  headers = { "Content-Type": "application/json" },
}) => {
  let axiosInstance = axios.create({
    headers: {
      Authorization: "",
    },
    params: params
  });

  let axiosInstanceGenerator =
    method === "delete"
      ? axiosInstance[method](resource, {
        data,
        headers,
      })
      : axiosInstance[method](resource, data, {
        headers
      });

  return axiosInstanceGenerator
    .then((response) => {
      success(response);
    })
    .catch((err) => {
      error(err);
    });
};