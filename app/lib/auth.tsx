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

// TODO backend should handle only camelcase fields and return only camelcase fields
function getFrontendPact(pact: Record<string, any>): Pact {
  return {
    title: pact.title,
    description: pact.description,
    streak: pact.streak,
    pactId: pact.pact_id,
    periodLength: pact.period_length,
    periodTarget: pact.period_target,
    privacyLevel: pact.privacy_level,
    participants: pact.participants,
  };
}

// TODO backend should handle only camelcase fields and return only camelcase fields
function getBackendPact(pact: Pact): Readonly<{}> {
  return {
    title: pact.title,
    description: pact.description,
    streak: pact.streak,
    pact_id: pact.pactId,
    period_length: pact.periodLength,
    period_target: pact.periodTarget,
    privacy_level: pact.privacyLevel,
    participants: pact.participants,
  };
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
    return response.data.map((pact: Readonly<{}>) => getFrontendPact(pact));
  } catch (error) {
    return null;
  }
}

async function getPactInfo(): Promise<Readonly<{}> | null> {
  // TODO
  return null;
}

async function createPact(pact: Pact): Promise<Pact | null> {
  const pactToCreate = getBackendPact(pact);

  try {
    const response = await axios.post(apiConfig.createPactUrl, pactToCreate);
    return response.data;
  } catch (error) {
    return null;
  }
}

async function updatePact(pact: Pact): Promise<Pact | null> {
  const pactToUpdate = getBackendPact(pact);

  try {
    const response = await axios.put(apiConfig.updatePactUrl, pactToUpdate);
    return response.data;
  } catch (error) {
    return null;
  }
}

async function deletePact(pact: Pact): Promise<Readonly<{}> | null> {
  const pactToUpdate = getBackendPact(pact);

  try {
    const response = await axios.delete(apiConfig.deletePactUrl, { data: pactToUpdate });
    return response.data;
  } catch (error) {
    return null;
  }
}

export default {
  loginAttempt,
  getUserPacts,
  getPactInfo,
  createPact,
  updatePact,
  deletePact,
};
