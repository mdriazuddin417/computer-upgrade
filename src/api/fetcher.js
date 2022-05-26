import axiosPrivate from "./PrivateAxios";
const fetcher = axiosPrivate.create({
  baseURL: "http://localhost:5000",
});

export default fetcher;
