import { Header } from "../../templates/Header";
import { useForm, SubmitHandler } from "react-hook-form";
import prefectures from "../../utility/prefecture";

type Inputs = {
  username: string,
  email: string,
  password: string,
  passwordConfirmation: string,
  userType: number,
  tokens: string,
  zipcode: number,
  prefecture: string,
  city: string,
  block: string,
  phoneNumber: number,
}

export const AuthRegister: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors, isValid, isSubmitting } } = useForm<Inputs>({
    mode: "onBlur", // フォーカスが外れたらvalidationが走ってくれる
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/v1/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          email: data.email,
          password: data.password,
          password_confirmation: data.passwordConfirmation,
          user_name: data.username,
          user_type: data.userType
        }),
      });

      if (response.ok) {
        const accessToken = response.headers.get('access-token');
        if (accessToken) {
          localStorage.setItem('authToken', accessToken);
        }

      } else {
        throw new Error("サーバーエラーが発生しました。再度お試しください。");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="l-container">
      <Header />
      <div className="p-signup">
        <h1 className="p-signup__title">会員登録</h1>
        <p className="p-signup__description">下記の情報を入力して、「新規会員登録する」ボタンを押してください。</p>
        <form className="p-signup__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="p-signup__form--label-with-validation-message">
            <label htmlFor="username">ユーザー名</label>
            {errors.username?.message && <span>{errors.username.message}</span>}
          </div>
          <input type="text" {...register("username", { required: "ユーザー名は必須です。" })} />

          <div className="p-signup__form--label-with-validation-message">
            <label htmlFor="email">メールアドレス</label>
            {errors.email?.message && <span>{errors.email.message}</span>}
          </div>
          <input type="email" {...register("email", {
            required: "メールアドレスは必須です。", pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: '無効なEメールアドレスです。'
            }
          })} />

          <div className="p-signup__form--label-with-validation-message">
            <label htmlFor="password">パスワード</label>
            {errors.password?.message && <span>{errors.password.message}</span>}
          </div>
          <input type="password" {...register("password", {
            required: "パスワードは必須です。",
            minLength: { value: 6, message: "パスワードは6文字以上入力してください。" }
          })} />

          <div className="p-signup__form--label-with-validation-message">
            <label htmlFor="passwordConfirmation">確認のため再度入力してください</label>
            {errors.passwordConfirmation?.message && <span>{errors.passwordConfirmation.message}</span>}
          </div>
          <input type="password" {...register("passwordConfirmation", {
            required: "パスワードを再度入力してください。",
            validate: (value: string) => value === watch("password") || "パスワードが一致しません。"
          })} />

          <div className="p-signup__form--label-with-validation-message">
            <label htmlFor="userType">ユーザータイプ</label>
            {errors.userType?.message && <span>{errors.userType.message}</span>}
          </div>
          <div className="p-signup__form--user-type">
            <input type="radio" id="offerer" value={1}  {...register("userType", { required: "ユーザータイプを選択してください。" })} /><label htmlFor="offerer">募集者</label>
            <input type="radio" id="seeker" value={2} {...register("userType", { required: "ユーザータイプを選択してください。" })} /><label htmlFor="seeker">応募者</label>
          </div>

          <div className="p-signup__form--label-with-validation-message">
            <label htmlFor="zipcode">郵便番号</label>
            {errors.zipcode?.message && <span>{errors.zipcode.message}</span>}
          </div>
          <input type="text" {...register("zipcode", {
            required: "郵便番号は必須です。",
            pattern: { value: /^\d{7}$/, message: "有効な郵便番号7桁を半角入力してください (例: 1234567) " }
          })} />

          <div className="p-signup__form--address-block">

            <div className="p-signup__form--prefecture">
              <div className="p-signup__form--label-with-validation-message">
                {/* <div className="p-signup__form--prefecture"> */}
                <label htmlFor="prefecture">都道府県</label>
                {errors.prefecture?.message && <span>{errors.prefecture.message}</span>}
              </div>
              <select {...register("prefecture", { required: "都道府県を選択してください。" })}>
                <option value="">選択してください</option>
                {prefectures.map((prefecture) => (
                  <option value={prefecture} key={prefecture}>{prefecture}</option>
                ))}
              </select>
            </div>

            <div className="p-signup__form--city">
              <div className="p-signup__form--label-with-validation-message">
                <label htmlFor="city">市区町村</label>
                {errors.city?.message && <span>{errors.city.message}</span>}
              </div>
              <input type="text" {...register("city", { required: "市区町村を入力してください。" })} />
            </div>

          </div>

          <div className="p-signup__form--label-with-validation-message">
            <label htmlFor="block">番地・建物名など</label>
            {errors.block?.message && <span>{errors.block.message}</span>}
          </div>
          <input type="text" {...register("block", { required: "番地や建物名を入力してください。" })} />

          <div className="p-signup__form--label-with-validation-message">
            <label htmlFor="phoneNumber">電話番号</label>
            {errors.phoneNumber?.message && <span>{errors.phoneNumber.message}</span>}
          </div>
          <input type="tel" {...register("phoneNumber", {
            required: "電話番号は必須です。",
            pattern: { value: /^\d+$/, message: "電話番号は半角数字のみで入力してください。" }
          })} />

          <button type="submit" disabled={!isValid || isSubmitting}>新規会員登録する</button>
        </form >
      </div >
    </div >
  )
};