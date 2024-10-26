import axios from 'axios';

export const login = async (id, pw) => {
  const result = await axios.post('/api/user/create/', { id, pw });
  return result.data.data;
};
