import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../parts/Button';
import { Header } from '../../templates/Header';
import { FormTemplate } from "../../templates/FormTemplate";
import { H2Header } from '../../parts/H2Header';
import { PageTemplate } from '../../templates/PageTemplate';
import { ContainerTemplate } from '../../templates/ContainerTemplate';
import { signInURL } from "../../utility/urls";

type Inputs = {
  email: string;
  password: string;
};

export const AuthLogin: React.FC = () => {
  const navigate = useNavigate();
  const [flashMessage, setFlashMessage] = useState<string>('');
  const { register, handleSubmit, errors, formState: { isValid, isSubmitting } } = useForm<Inputs>({
    mode: 'onBlur',
  });

  const onSubmit = async (data: Inputs) => {
    try {
      const response = await fetch(signInURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const access_token = response.headers.get('access-token');
        const client = response.headers.get('client');
        const uid = response.headers.get('uid');
        console.log(access_token)
        // const responseData = await response.json(); // JSONデータを取得
        // const token = responseData.token; // 'token' プロパティを取得

        if (access_token && client && uid) {
          // セキュリティ上の注意: アクセストークンを安全に保存する他の手段を検討する
          localStorage.setItem('authToken', access_token);
          localStorage.setItem('client', client);
          localStorage.setItem('uid', uid);
          setFlashMessage('ログインしました。');
          navigate('/');
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.errors[0] || 'ログインに失敗しました。');
      }
    } catch (err) {
      console.error(err);
      setFlashMessage('ログインに失敗しました。');
    }
  };

  return (
    <ContainerTemplate>
      <Header />
      <PageTemplate>
        <H2Header>会員ログイン</H2Header>
        <p className="p-signup__description">下記の情報を入力して、「ログイン」ボタンを押してください。</p>
        <FormTemplate onSubmit={handleSubmit(onSubmit)}>
        <div className="t-form__input --label-with-validation-message">
          <label htmlFor="email">メールアドレス</label>
          {errors.email?.message && (
            <span className="t-login__input --validation-message">
              {errors.email.message}
            </span>
          )}
          <input type="email" id="email" name="email" ref={register({
            required: 'メールアドレスを入力してください',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: '無効なEメールアドレスです。',
            },
          })} />
        </div>
        <div className="t-form__input --label-with-validation-message">
          <label htmlFor="password">パスワード</label>
          {errors.password?.message && (
            <span className="t-form__input --validation-message">
              {errors.password.message}
            </span>
          )}
          <input type="password" id="password" name="password" ref={register({
            required: 'パスワードを入力してください',
            minLength: {
              value: 6,
              message: 'パスワードは6文字以上で入力してください',
            },
          })} />
        </div>
        <div className="t-login__button">
          <Button type="submit" disabled={!isValid || isSubmitting}>ログイン</Button>
        </div>
        {flashMessage && (
          <div className="flash-message">{flashMessage}</div>
        )}
        </FormTemplate>
      </PageTemplate>
    </ContainerTemplate>
  );
};