import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import apiConfig from '../config/api';
import { Pact, User, FriendSuggestion } from './types';

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
    tags: pact.tags,
    status: pact.status,
  };
}

// TODO backend should handle only camelcase fields and return only camelcase fields
function getBackendPact(pact: Pact): Readonly<{}> {
  return {
    title: pact.title,
    description: pact.description,
    pact_id: pact.pactId,
    period_length: pact.periodLength,
    period_target: pact.periodTarget,
    privacy_level: pact.privacyLevel,
    participants: pact.participants,
    tags: pact.tags,
    status: pact.status,
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
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
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

// TODO backend should handle only camelcase fields and return only camelcase fields
function getFrontendUser(user: Record<string, any>): User {
  return {
    username: user.username,
    firstName: user.firstname,
    lastName: user.lastname,
    location: user.location,
    email: user.email,
    userId: user.user_id,
  };
}

async function getUserFriends(): Promise<User[] | null> {
  try {
    if (!axios.defaults.headers.common.Authorization) {
      const storedAuthToken = await AsyncStorage.getItem(authTokenKey);

      if (storedAuthToken === null) {
        return null;
      }

      axios.defaults.headers.common.Authorization = storedAuthToken;
    }

    const response = await axios.get(apiConfig.getUserFriendsUrl);
    return response.data.friends.map((friend: Readonly<{}>) => getFrontendUser(friend));
  } catch (error) {
    return null;
  }
}

async function getUserFriendRequests(): Promise<User[] | null> {
  try {
    if (!axios.defaults.headers.common.Authorization) {
      const storedAuthToken = await AsyncStorage.getItem(authTokenKey);

      if (storedAuthToken === null) {
        return null;
      }

      axios.defaults.headers.common.Authorization = storedAuthToken;
    }

    const response = await axios.get(apiConfig.getUserFriendRequestsUrl);
    return response.data.requests.map((request: Readonly<{}>) => getFrontendUser(request));
  } catch (error) {
    return null;
  }
}

async function acceptFriendRequest(userId: string): Promise<Readonly<{}> | null> {
  try {
    if (!axios.defaults.headers.common.Authorization) {
      const storedAuthToken = await AsyncStorage.getItem(authTokenKey);

      if (storedAuthToken === null) {
        return null;
      }

      axios.defaults.headers.common.Authorization = storedAuthToken;
    }

    const response = await axios.post(apiConfig.acceptFriendRequestUrl, { user_id: userId });
    return response.data;
  } catch (error) {
    return null;
  }
}

async function declineFriendRequest(userId: string): Promise<Readonly<{}> | null> {
  try {
    if (!axios.defaults.headers.common.Authorization) {
      const storedAuthToken = await AsyncStorage.getItem(authTokenKey);

      if (storedAuthToken === null) {
        return null;
      }

      axios.defaults.headers.common.Authorization = storedAuthToken;
    }

    const response = await axios.post(apiConfig.declineFriendRequestUrl, { user_id: userId });
    return response.data;
  } catch (error) {
    return null;
  }
}

async function sendFriendRequest(userId: string): Promise<Readonly<{}> | null> {
  try {
    if (!axios.defaults.headers.common.Authorization) {
      const storedAuthToken = await AsyncStorage.getItem(authTokenKey);

      if (storedAuthToken === null) {
        return null;
      }

      axios.defaults.headers.common.Authorization = storedAuthToken;
    }

    const response = await axios.post(apiConfig.sendFriendRequestUrl, { user_id: userId });
    return response.data;
  } catch (error) {
    return null;
  }
}

async function getUserSearch(prefix: string): Promise<User[]| null> {
  try {
    if (!axios.defaults.headers.common.Authorization) {
      const storedAuthToken = await AsyncStorage.getItem(authTokenKey);

      if (storedAuthToken === null) {
        return null;
      }

      axios.defaults.headers.common.Authorization = storedAuthToken;
    }

    const response = await axios.get(`${apiConfig.searchUsersUrl}?prefix=${prefix}`);
    return response.data.users.map((user: Readonly<{}>) => getFrontendUser(user));
  } catch (error) {
    return null;
  }
}

async function getFriendSuggestions(): Promise<FriendSuggestion[]| null> {
  try {
    if (!axios.defaults.headers.common.Authorization) {
      const storedAuthToken = await AsyncStorage.getItem(authTokenKey);

      if (storedAuthToken === null) {
        return null;
      }

      axios.defaults.headers.common.Authorization = storedAuthToken;
    }

    const response = await axios.get(`${apiConfig.getFriendSuggestionsUrl}?limit=20`);
    return response.data.users.map((suggestion: Record<string, any>) => (
      { user: getFrontendUser(suggestion), mutual: suggestion.mutual, common: suggestion.common }));
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getPactCheckins(pactId: string): Promise<Pact[] | null> {
  try {
    const response = await axios.post(apiConfig.getCheckinsUrl, { pact_id: pactId });
    return response.data.checkIns;
  } catch (error) {
    return null;
  }
}

async function createPactCheckin(pactId: string, comments: string): Promise<Pact[] | null> {
  try {
    const response = await axios.post(apiConfig.createCheckinUrl, {
      pact_id: pactId,
      comments,
    });
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
  getUserFriends,
  getUserFriendRequests,
  acceptFriendRequest,
  declineFriendRequest,
  sendFriendRequest,
  getUserSearch,
  getFriendSuggestions,
  getPactCheckins,
  createPactCheckin,
};
