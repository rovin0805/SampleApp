import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});

export const getUsersApi = () => api.get('users');

export const getPostsApi = ({page = 1, limit = 10}) =>
  api.get(`posts?_page=${page}&_limit=${limit}`);

export const uploadPostApi = req => api.post('posts', JSON.stringify(req));
