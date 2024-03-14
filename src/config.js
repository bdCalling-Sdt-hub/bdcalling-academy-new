import axios from "axios";

const cloud = true;
const imgCloud = true;

const url = cloud
  ? "https://myserver.bdcallingacademy.com/api/"
  : "http://192.168.10.13:8000/api/";

const imageUrl = imgCloud
  ? "https://myserver.bdcallingacademy.com"
  : "http://192.168.10.13:8000";

export const baseUrl = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export const imgUrl = imageUrl;
