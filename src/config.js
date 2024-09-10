import axios from "axios";

const cloud = false;
const imgCloud = false;

const url = cloud
  ? "https://server.bdcallingacademy.com/api/"
  : "http://115.127.156.13:7000/api";

const imageUrl = imgCloud
  ? "https://server.bdcallingacademy.com"
  : "http://115.127.156.13:7000";

export const baseUrl = axios.create({
  baseURL: url,
  // timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export const imgUrl = imageUrl;
