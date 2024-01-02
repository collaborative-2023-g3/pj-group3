// client<->サーバー間の通信を行うためのクライアントを作成

// import applyCaseMiddleware from "axios-case-converter"
// import axios from "axios"
// import { DEFAULT_API_LOCALHOST } from "../state/urls"

// applyCaseMiddleware : 【キャメルケース / スネークケースの変換設定】
//   -- axiosで受け取ったレスポンスの値をスネークケース→キャメルケースに変換
//   -- または送信するリクエストの値をキャメルケース→スネークケースに変換してくれるライブラリ
//   -- ヘッダーに関してはケバブケースのままで良いので適用を無視するオプションを追加
// const options = {
//   ignoreHeaders: true
// }
// export const client = applyCaseMiddleware(axios.create({
//   baseURL: DEFAULT_API_LOCALHOST
// }), options)

// 【グローバルヘッダーの設定】
//   -- JWTを使用して認証を行っているので