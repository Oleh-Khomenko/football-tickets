import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    common: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  },
});

export default http;
