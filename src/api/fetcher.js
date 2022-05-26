import axiosPrivate from "./PrivateAxios";
const fetcher = axiosPrivate.create({
  baseURL: "https://computer-upgrated.herokuapp.com",
});

export default fetcher;
