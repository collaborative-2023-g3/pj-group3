import React from 'react';
import { Button } from '../../parts/Button';
import { H3Header } from '../../parts/H3Header';

export const LoginForm: React.FC = () => {
  return (
    <form className="t-login">
      <H3Header>会員ログイン</H3Header>
      <div className="t-login__input">
        <label htmlFor="username">メールアドレス</label>
        <input id="username" type="text" />
      </div>
      <div className="t-login__input">
        <label htmlFor="password">パスワード</label>
        <input id="password" type="password" />
      </div>
      <div className="t-login__button">
        <Button>ログイン</Button>
      </div>
    </form>
  );
};
