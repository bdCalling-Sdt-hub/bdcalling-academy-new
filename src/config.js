import axios from "axios";

const cloud = true;
const imgCloud = true;

const url = 'http://152.42.234.23/api';

const imageUrl = 'http://152.42.234.23';
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
