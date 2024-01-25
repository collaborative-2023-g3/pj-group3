import React from 'react';
import { useParams } from 'react-router-dom';
import { H2Header } from '../../../parts/H2Header';
import { Header } from '../../../templates/Header';
import { ContainerTemplate } from '../../../templates/ContainerTemplate';
import { PageTemplate } from '../../../templates/PageTemplate';
import { Button } from '../../../parts/Button';

const CatShow: React.FC = () => {
  // React RouterのuseParamsフックを使用して画面遷移前のパラメータから情報を取得
  const { catId, image, name, breed, date_of_birth, sex, status, UserUid } = useParams<{
    cat_id: string;
    image: string;
    name: string;
    breed: string;
    date_of_birth: string;
    sex: string;
    status: string;
    uid: string;
  }>();

  // ローカルストレージからログインしているユーザーのUIDを取得
  const loginUserUid = localStorage.getItem('uid');

  // ログインしているユーザーのUIDと猫のUIDが一致した場合にボタンを表示する
  const isShowButton = loginUserUid === UserUid;

  // 性別が「0」の場合は「男の子」、性別が「1」の場合は「女の子」、それ以外の場合は「不明」と表示する
  const genderText = sex === '0' ? '男の子' : sex === '1' ? '女の子' : '不明';

  // ステータスが「1」の場合は「募集中」、ステータスが「2」の場合は「お見合い中」、ステータスが「3」の場合は「里親決定」と表示する
  const statusText =
    status === '1' ? '募集中' : status === '2' ? 'お見合い中' : status === '3' ? '里親決定' : '不明';

  return (
    <ContainerTemplate>
      <Header />
      <PageTemplate>
        <H2Header>{name}詳細</H2Header>
        <p className="p-top__description">{name}の詳細ページ</p>
        <div className="p-top__container">
          <div className="t-form">
            <div className="p-cat-show">
              <table>
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      /** 一時的に猫の画像を仮表示している */
                      /** 変更の際はソース部分の変更を行う */
                      <img src="http://pj-5bucket.s3.ap-northeast-1.amazonaws.com/test-cat.png" alt="猫の写真" />
                    </td>
                  </tr>
                  <tr>
                    <td>猫のID:</td>
                    <td>{catId}</td>
                  </tr>
                  <tr>
                    <td>名前:</td>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <td>猫種:</td>
                    <td>{breed}</td>
                  </tr>
                  <tr>
                    <td>生年月日:</td>
                    <td>{date_of_birth}</td>
                  </tr>
                  <tr>
                    <td>雌雄:</td>
                    <td>{genderText}</td>
                  </tr>
                  <tr>
                    <td>募集ステータス:</td>
                    <td>{statusText}</td>
                  </tr>
                  <tr>
                    <td>募集者:</td>
                    <td>{UserUid}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="t-login__button">
              {/* ログインしているユーザーのUIDと猫のUIDが一致した場合にボタンを表示する */}
              {isShowButton && (
                <>
                  <Button>お見合い中に設定する</Button>
                  <Button>里親決定設定する</Button>
                </>
              )}
              {/* ログインしているユーザーのUIDと猫のUIDが一致しない場合は応募ボタンを表示する */}
              {!isShowButton && <Button>応募する</Button>}
            </div>
          </div>
        </div>
      </PageTemplate>
    </ContainerTemplate>
  );
};

export default CatShow;
