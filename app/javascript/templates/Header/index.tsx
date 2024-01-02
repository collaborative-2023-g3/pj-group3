import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="t-header">
      <h1 className="t-header__title">Cat Family</h1>
      <ul className="t-header__link">
        <li><a href="/">ログイン</a></li>
        <li><a href="/">会員登録</a></li>
      </ul>
    </div>
  );
};
