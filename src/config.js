import axios from "axios";

const cloud = true;
const imgCloud = true;

const url = cloud
  ? "https://bdcallingserver.bdcallingacademy.com/api/"
  : "http://192.168.10.64:5000/api";

const imageUrl = imgCloud
  ? "https://bdcallingserver.bdcallingacademy.com/public"
  : "http://192.168.10.64:5000";

export const baseUrl = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export const imgUrl = imageUrl;
