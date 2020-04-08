const baseUrl = 'https://u6dmt1htic.execute-api.us-east-2.amazonaws.com/dev/';
const loginEndpoint = 'login';
const registerEndpoint = 'register';
const createPactEndpoint = 'createpact';
const updatePactEndpoint = 'updatepact';
const deletePactEndpoint = 'deletepact';
const getPactInfoEndpoint = 'getpactinfo';
const getUserPactsEndpoint = 'getuserpacts';
const getUserFriendsEndpoint = 'friends';

const apiConfig = {
  baseUrl,
  loginUrl: baseUrl + loginEndpoint,
  registerUrl: baseUrl + registerEndpoint,
  createPactUrl: baseUrl + createPactEndpoint,
  updatePactUrl: baseUrl + updatePactEndpoint,
  deletePactUrl: baseUrl + deletePactEndpoint,
  getPactInfoUrl: baseUrl + getPactInfoEndpoint,
  getUserPactsUrl: baseUrl + getUserPactsEndpoint,
  getUserFriendsUrl: baseUrl + getUserFriendsEndpoint,
};

export default apiConfig;
