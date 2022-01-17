import axios from 'axios';

export default axios.create({
  baseURL: 'https://segware-book-api.segware.io/api',
});