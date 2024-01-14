import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../../parts/button';
import { H3Header } from '../../parts/H3Header';

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Inputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    try {
      const response = await fetch('http://localhost:3000/v1/auth/log_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error);
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
        <input type="email" name="email" ref={register({ 
          required: "メールアドレスを入力してください" ,
          pattern: 
            {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "無効なEメールアドレスです。"
            }
        })} />
      </div>
      <div className="t-login__input --label-with-validation-message">
        <label htmlFor="password">パスワード</label>
        {errors.password?.message && (
          <span className="t-login__input --validation-message">
            {errors.password.message}
          </span>
        )}
        <input type="password" name="password" ref={register({ 
          required: "パスワードを入力してください" ,
          minLength: {
            value: 6,
            message: "パスワードは6文字以上で入力してください"
          }
        })} />
      </div>
      <div className="t-login__button">
        <Button disabled={!isValid || isSubmitting}>ログイン</Button>
      </div>
    </form>
  );
};
