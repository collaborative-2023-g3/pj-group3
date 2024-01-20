// APIを取得するURL一式
export const DEFAULT_API = process.env.API_ENDPOINT || 'http://localhost:3000/api';

// ユーザー管理機能
export const signUpUrl = `${DEFAULT_API}/auth`
export const successURL = `${DEFAULT_API}/signup/complete`
export const signInURL = `${DEFAULT_API}/auth/sign_in`
export const signOutURL = `/auth/sign_out`
export const sessionURL =  `${DEFAULT_API}/auth/sessions`

// 検索&&ソート機能
export const catSearchUrl = `${DEFAULT_API}/cats/search`
