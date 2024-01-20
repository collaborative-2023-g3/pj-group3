// APIを取得するURL一式
const API_ENDPOINT = window.environmentVariables.API_ENDPOINT;
export const DEFAULT_API_ENDPOINT = API_ENDPOINT || 'http://localhost:3000/api';

// ユーザー管理機能
export const signUpUrl = `${DEFAULT_API_ENDPOINT}/auth`
export const successURL = `${DEFAULT_API_ENDPOINT}/signup/complete`
export const signInURL = `${DEFAULT_API_ENDPOINT}/auth/sign_in`
export const signOutURL = `/auth/sign_out`
export const sessionURL =  `${DEFAULT_API_ENDPOINT}/auth/sessions`

// 検索&&ソート機能
export const catSearchUrl = `${DEFAULT_API_ENDPOINT}/cats/search`