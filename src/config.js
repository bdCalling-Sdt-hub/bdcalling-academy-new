import axios from "axios";

const cloud = true;
const imgCloud = true;

const url = 'https://api.bdcallingacademy.com/api';

const imageUrl = 'https://api.bdcallingacademy.com';
// const url = 'https://mainserver.bdcallingacademy.com/api';

// const imageUrl = 'https://mainserver.bdcallingacademy.com';

export const baseUrl = axios.create({
  baseURL: url,
  // timeout: 10000,
  headers: {
    "X-Custom-Header": "foobar",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Pragma": "no-cache",
    "Expires": "0"
  },
});
6
export const imgUrl = imageUrl;
