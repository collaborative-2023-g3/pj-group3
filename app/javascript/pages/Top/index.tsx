import React from 'react';

import { LoginForm } from '../../templates/LoginForm';
import { H2Header } from '../../parts/H2Header';
import { Header } from '../../templates/Header';

const Top: React.FC = () => {
  return (
    <div className="l-container">
      <Header />
        <div className="p-top">
          <H2Header>会員ログイン</H2Header>
          <p className="p-top__description">メールアドレスとパスワードを入力して「ログイン」ボタンを押してください。</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default Top;
