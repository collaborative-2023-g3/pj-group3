// APIを取得するURL一式
export const DEFAULT_API_LOCALHOST = 'http://localhost:3000/api'
export const DEFAULT_API_PRODUCTION = 'http://localhost:3000/api'

// ユーザー管理機能
export const signUpUrl = `${DEFAULT_API_LOCALHOST}/auth`
export const successURL = `${DEFAULT_API_LOCALHOST}/signup/complete`
export const signInURL = `${DEFAULT_API_LOCALHOST}/auth/sign_in`
export const signOutURL = `/auth/sign_out`
export const sessionURL =  `${DEFAULT_API_LOCALHOST}/auth/sessions`

// 検索&&ソート機能
export const catSearchUrl = `${DEFAULT_API_LOCALHOST}/cats/search`
