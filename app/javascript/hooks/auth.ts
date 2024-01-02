// sample実装例
// // ログイン
// import { signOutURL, sessionURL, signUpUrl, signInURL } from "../utility/urls";
// import { client } from "./client";

// // 新規登録
// export const signUp = (user: {}) => {
//   return client.post(signUpUrl, user);
// };

// // ログイン
// export const signIn = (user: {}) => {
//   return client.post(signInURL, user);
// };


// // 認証済みのユーザー情報を取得
// export const getCurrentUser = () => {
//   // if (
//   //   !window.localStorage.getItem('token')
//   // )
//   //   return;

//   return client.post(sessionURL, {
//     headers: {
//       Authorization : window.localStorage.getItem('token') || "",
//     },
//   });
// };
