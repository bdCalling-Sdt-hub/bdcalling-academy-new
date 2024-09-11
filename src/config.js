import axios from "axios";

const cloud = true;
const imgCloud = true;

const url = 'https://mainserver.bdcallingacademy.com/api';

const imageUrl = 'https://mainserver.bdcallingacademy.com';

export const baseUrl = axios.create({
  baseURL: url,
  // timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

export const imgUrl = imageUrl;
