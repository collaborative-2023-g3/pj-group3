// APIを取得するURL一式
const API_ENDPOINT = window.environmentVariables.API_ENDPOINT;
export const DEFAULT_API_ENDPOINT = API_ENDPOINT || 'http://localhost:3000/api';

// ユーザー管理機能
export const signUpUrl = `${DEFAULT_API_ENDPOINT}/v1/auth`
export const signInURL = `${DEFAULT_API_ENDPOINT}/v1/auth/sign_in`
export const signOutURL = `/auth/sign_out`


// 猫機能
export const catUrl = `${DEFAULT_API_ENDPOINT}/v1/cat`
export const catSearchUrl = `${DEFAULT_API_ENDPOINT}/v1/cats/search`