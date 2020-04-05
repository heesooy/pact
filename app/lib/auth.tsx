import axios from 'axios';
import apiConfig from '../config/api';

async function loginAttempt(email: string, password: string): Promise<string | null> {
  try {
    const response = await axios.post(apiConfig.loginUrl, { email, password });
    return response.data.token;
  } catch (error) {
    return null;
  }
}

export default {
  loginAttempt,
};
