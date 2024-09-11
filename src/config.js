import axios from "axios";

const cloud = true;
const imgCloud = true;

const url = cloud
  ? "https://mainserver.bdcallingacademy.com/api/"
  : "http://115.127.156.13:7000/api";

const imageUrl = imgCloud
  ? "https://mainserver.bdcallingacademy.com"
  : "http://115.127.156.13:7000";

export const baseUrl = axios.create({
  baseURL: url,
  // timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export const imgUrl = imageUrl;
