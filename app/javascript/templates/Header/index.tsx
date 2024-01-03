import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <div className="t-header">
      <h1 className="t-header__title">Cat Family</h1>
      <ul className="t-header__link">
        <li><a href="/">ログイン</a></li>
        <li><Link to="/register"> 会員登録</Link></li>
      </ul>
    </div>
  );
};
