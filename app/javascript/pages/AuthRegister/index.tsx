import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Header } from "../../templates/Header";
import prefectures from "../../utility/prefecture";
import { H2Header } from "../../parts/H2Header";
import { FormTemplate } from "../../templates/FormTemplate";
import { Button } from "../../parts/Button";
import { PageTemplate } from "../../templates/PageTemplate";


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
  const navigate = useNavigate();
  const [flashMessage, setFlashMessage] = useState<string>("");
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
          user_type: data.userType,
          zip_code: data.zipcode,
          prefecture: data.prefecture,
          city: data.city,
          block: data.block,
          phone_number: data.phoneNumber,
        }),
      });

      if (response.ok) {
        // レスポンスヘッダーからアクセストークンを取得
        const accessToken = response.headers.get('access-token');

        if (accessToken) {
          // ローカルストレージにアクセストークンを保存
          localStorage.setItem('authToken', accessToken);
          // フラッシュメッセージを表示
          // setFlashMessage("会員登録が完了しました。");
          // トップページへリダイレクト
          navigate("/");
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
      <PageTemplate>
        <H2Header>会員登録</H2Header>
        <p className="p-signup__description">下記の情報を入力して、「新規会員登録する」ボタンを押してください。</p>
        <FormTemplate onSubmit={handleSubmit(onSubmit)}>
          <div className="t-form__input p-signup__form--label-with-validation-message">
            <label htmlFor="username">氏名</label>
            {errors.username?.message && <span>{errors.username.message}</span>}
          </div>
          <input type="text" name="username" ref={register({ required: "ユーザー名は必須です。" })} />

          <div className="t-form__input p-signup__form--label-with-validation-message">
            <label htmlFor="email">メールアドレス</label>
            {errors.email?.message && <span>{errors.email.message}</span>}
          </div>
          <input type="email" name="email" ref={register({
            required: "メールアドレスは必須です。", pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: '無効なEメールアドレスです。'
            }
          })} />

          <div className="t-form__input p-signup__form--label-with-validation-message">
            <label htmlFor="password">パスワード</label>
            {errors.password?.message && <span>{errors.password.message}</span>}
          </div>
          <input type="password" name="password" ref={register({
            required: "パスワードは必須です。",
            minLength: { value: 6, message: "パスワードは6文字以上入力してください。" }
          })} />

          <div className="t-form__input p-signup__form--label-with-validation-message">
            <label htmlFor="passwordConfirmation">パスワード(確認用)</label>
            {errors.passwordConfirmation?.message && <span>{errors.passwordConfirmation.message}</span>}
          </div>
          <input type="password" name="passwordConfirmation" ref={register({
            required: "パスワードを再度入力してください。",
            validate: (value: string) => value === watch("password") || "パスワードが一致しません。"
          })} />

          <div className="t-form__input p-signup__form--label-with-validation-message">
            <label htmlFor="userType">ユーザータイプ</label>
            {errors.userType?.message && <span>{errors.userType.message}</span>}
          </div>
          <div className="t-form__input p-signup__form--user-type">
            <input type="radio" id="offerer" value={1} name="userType" ref={register({ required: "ユーザータイプを選択してください。" })} /><label htmlFor="offerer">募集者</label>
            <input type="radio" id="seeker" value={2} name="userType" ref={register({ required: "ユーザータイプを選択してください。" })} /><label htmlFor="seeker">応募者</label>
          </div>

          <div className="t-form__input p-signup__form--label-with-validation-message">
            <label htmlFor="zipcode">郵便番号</label>
            {errors.zipcode?.message && <span>{errors.zipcode.message}</span>}
          </div>
          <input
            type="text"
            name="zipcode"
            ref={register({
              required: "郵便番号は必須です。",
              pattern: { value: /^\d{7}$/, message: "有効な郵便番号7桁を半角入力してください (例: 1234567) " }
            })} />
          <div className="t-form__input p-signup__form--label-with-validation-message">
            {/* <div className="p-signup__form--prefecture"> */}
            <label htmlFor="prefecture">都道府県</label>
            {errors.prefecture?.message && <span>{errors.prefecture.message}</span>}
          </div>
          <select name="prefecture" ref={register({ required: "都道府県を選択してください。" })}>
            <option value="">選択してください</option>
            {prefectures.map((prefecture) => (
              <option value={prefecture} key={prefecture}>{prefecture}</option>
            ))}
          </select>
          <div className="t-form__input p-signup__form--label-with-validation-message">
            <label htmlFor="city">市区町村</label>
            {errors.city?.message && <span>{errors.city.message}</span>}
          </div>
          <input type="text" name="city" ref={register({ required: "市区町村を入力してください。" })} />
          <div className="t-form__input p-signup__form--label-with-validation-message">
            <label htmlFor="block">番地・建物名など</label>
            {errors.block?.message && <span>{errors.block.message}</span>}
          </div>
          <input type="text" name="block" ref={register({ required: "番地や建物名を入力してください。" })} />
          <div className="t-form__input p-signup__form--label-with-validation-message">
            <label htmlFor="phoneNumber">電話番号</label>
            {errors.phoneNumber?.message && <span>{errors.phoneNumber.message}</span>}
          </div>
          <input type="tel" name="phoneNumber" ref={register({
            required: "電話番号は必須です。",
            pattern: { value: /^\d+$/, message: "電話番号は半角数字のみで入力してください。" }
          })} />

          <div className="t-login__button">
            <Button type="submit" disabled={!isValid || isSubmitting}>新規会員登録する</Button>
          </div>
        </FormTemplate>
      </PageTemplate>
    </div >
  )
};