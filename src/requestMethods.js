import axios from "axios";

const BASE_URL = "https://blogbaackend-88d959b3d49b.herokuapp.com/api/";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

