import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../parts/Button';
import { H3Header } from '../../parts/H3Header';

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [flashMessage, setFlashMessage] = useState<string>('');
  const { register, handleSubmit, errors, formState: { isValid, isSubmitting } } = useForm<Inputs>({
    mode: 'onBlur',
  });

  const onSubmit = async (data: Inputs) => {
    try {
      const response = await fetch('http://localhost:3000/v1/auth/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const access_token = response.headers.get('access-token');

        if (access_token) {
          // セキュリティ上の注意: アクセストークンを安全に保存する他の手段を検討する
          localStorage.setItem('access-token', access_token);
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
    <form className="t-login" onSubmit={handleSubmit(onSubmit)}>
      <H3Header>会員ログイン</H3Header>
      <div className="t-login__input --label-with-validation-message">
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
      <div className="t-login__input --label-with-validation-message">
        <label htmlFor="password">パスワード</label>
        {errors.password?.message && (
          <span className="t-login__input --validation-message">
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
    </form>
  );
};
