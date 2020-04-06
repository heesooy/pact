import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import apiConfig from '../config/api';
import { Pact } from './types';

const authTokenKey = 'AUTH_TOKEN';

async function loginAttempt(email: string, password: string): Promise<boolean | null> {
  try {
    const response = await axios.post(apiConfig.loginUrl, { email, password });
    axios.defaults.headers.common.Authorization = response.data.token;
    await AsyncStorage.setItem(authTokenKey, response.data.token);
    return true;
  } catch (error) {
    return false;
  }
}

async function getUserPacts(): Promise<Pact[] | null> {
  try {
    if (!axios.defaults.headers.common.Authorization) {
      const storedAuthToken = await AsyncStorage.getItem(authTokenKey);

      if (storedAuthToken === null) {
        return null;
      }

      axios.defaults.headers.common.Authorization = storedAuthToken;
    }

    const response = await axios.get(apiConfig.getUserPactsUrl);
    return response.data;
  } catch (error) {
    return null;
  }
}

async function getPactInfo(): Promise<Readonly<{}> | null> {
  // TODO
  return null;
}

async function createPact(): Promise<Readonly<{}> | null> {
  // TODO
  return null;
}

async function updatePact(): Promise<Readonly<{}> | null> {
  // TODO
  return null;
}

async function deletePact(): Promise<Readonly<{}> | null> {
  // TODO
  return null;
}

export default {
  loginAttempt,
  getUserPacts,
};
