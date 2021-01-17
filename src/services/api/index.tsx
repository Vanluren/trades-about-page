import axios from 'axios';
import { URL_STRINGS } from 'utils/url-contstants';

export const AUTH_HEADER_KEY = 'Authorization';

const axiosInstance = axios.create({
  baseURL: URL_STRINGS.BASE,
  timeout: 10000,
});

axiosInstance.defaults.headers = {
  common: {
    [AUTH_HEADER_KEY]: 'Bearer ' + process.env.REACT_APP_TOKEN,
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

export default axiosInstance;
