import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const navigate = useNavigate(); // ここで useNavigate を呼び出す
  const token = localStorage.getItem('token');

  // ログアウトボタンのクリックハンドラ
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/'); // 既に定義された navigate を使用
  };

  return (
    <div className="t-header">
      <h1 className="t-header__title"><Link to="/">CatFamily</Link></h1>
      <ul className="t-header__link">
        {token ? (
          <>
            <li>
              <button onClick={handleLogout}>ログアウト</button>
            </li>
            <li><Link to="/my">マイページ</Link></li>
          </>
          ) : (
            <>
              <li><Link to="/login">ログイン</Link></li>
              <li><Link to="/register">会員登録</Link></li>
            </>
          )}
      </ul>
    </div>
  );
};
