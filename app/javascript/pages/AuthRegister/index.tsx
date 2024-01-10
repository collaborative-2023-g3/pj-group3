import { useState } from "react";
import { Header } from "../../templates/Header";

export const AuthRegister: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    name: "",
    address: "",
    phoneNumber: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(formData);
      // ここでAPIをFetchして、ユーザー登録をする？
    } catch (err) {
      console.log(err); // エラー処置を書く
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="l-container">
      <Header />
      <div className="p-signup">
          <h1 className="p-signup__title">会員登録</h1>
          <p className="p-signup__description">下記の情報を入力して、「新規会員登録する」ボタンを押してください。</p>
          <form className="p-signup__form" onSubmit={handleSubmit}>
            <p>ユーザー名</p>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
            <p>メールアドレス</p>
            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
            <p>パスワード</p>
            <input type="password" name="password" value={formData.password} onChange={handleChange}/>
            <p>確認のため再度入力してください</p>
            <input type="password" name="passwordConfirmation" value={formData.passwordConfirmation} onChange={handleChange} />
            <p>名前</p>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            <p>住所</p>
            <input type="text" name="address" value={formData.address} onChange={handleChange}/>
            <p>電話番号</p>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
            <button type="submit">新規会員登録する</button>
          </form>
      </div>
    </div>
  )
};