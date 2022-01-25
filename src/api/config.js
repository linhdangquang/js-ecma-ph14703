import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://61e7a8b4e32cd90017acbbec.mockapi.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
