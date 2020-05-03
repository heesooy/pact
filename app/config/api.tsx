const baseUrl = 'https://u6dmt1htic.execute-api.us-east-2.amazonaws.com/dev/';
const loginEndpoint = 'login';
const registerEndpoint = 'register';
const getUserInfoEndpoint = 'getuserinfo';
const createPactEndpoint = 'createpact';
const updatePactEndpoint = 'updatepact';
const deletePactEndpoint = 'deletepact';
const getPactInfoEndpoint = 'getpactinfo';
const getUserPactsEndpoint = 'getuserpacts';
const getUserFriendsEndpoint = 'friends';
const getUserFriendRequestsEndpoint = 'friends/request';
const acceptFriendRequestEndpoint = 'friends/request/accept';
const declineFriendRequestEndpoint = 'friends/request/decline';
const sendFriendRequestEndpoint = 'friends/request/send';
const searchUsersEndpoint = 'friends/search';
const getFriendSuggestionsEndpoint = 'friends/suggest';
const getCheckinsEndpoint = 'pact/getcheckins';
const createCheckinEndpoint = 'pact/checkin';

const apiConfig = {
  baseUrl,
  loginUrl: baseUrl + loginEndpoint,
  registerUrl: baseUrl + registerEndpoint,
  getUserInfoUrl: baseUrl + getUserInfoEndpoint,
  createPactUrl: baseUrl + createPactEndpoint,
  updatePactUrl: baseUrl + updatePactEndpoint,
  deletePactUrl: baseUrl + deletePactEndpoint,
  getPactInfoUrl: baseUrl + getPactInfoEndpoint,
  getUserPactsUrl: baseUrl + getUserPactsEndpoint,
  getUserFriendsUrl: baseUrl + getUserFriendsEndpoint,
  getUserFriendRequestsUrl: baseUrl + getUserFriendRequestsEndpoint,
  acceptFriendRequestUrl: baseUrl + acceptFriendRequestEndpoint,
  declineFriendRequestUrl: baseUrl + declineFriendRequestEndpoint,
  sendFriendRequestUrl: baseUrl + sendFriendRequestEndpoint,
  searchUsersUrl: baseUrl + searchUsersEndpoint,
  getFriendSuggestionsUrl: baseUrl + getFriendSuggestionsEndpoint,
  getCheckinsUrl: baseUrl + getCheckinsEndpoint,
  createCheckinUrl: baseUrl + createCheckinEndpoint,
};

export default apiConfig;
