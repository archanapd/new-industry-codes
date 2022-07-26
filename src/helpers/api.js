import axios from "axios";

let axiosInstance = axios.create({
  headers: {
    Authorization: "",
  },
});

export const callAPI = ({
  method,
  resource,
  data = {},
  success = (data) => data,
  error = (data) => data,
  headers = { "Content-Type": "application/json" },
}) => {
  let axiosInstanceGenerator =
    method === "delete"
      ? axiosInstance[method](resource, {
          data,
          headers,
        })
      : axiosInstance[method](resource, data, {
          headers,
        });

  return axiosInstanceGenerator
    .then((response) => {
      success(response);
    })
    .catch((err) => {
      error(err);
    });
};