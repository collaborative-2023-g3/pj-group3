import React from 'react';
import { useParams } from 'react-router-dom';
import { H2Header } from '../../parts/H2Header';
import { Header } from '../../templates/Header';
import { ContainerTemplate } from '../../templates/ContainerTemplate';
import { PageTemplate } from '../../templates/PageTemplate';
import { Button } from '../../parts/Button';

const CatShow: React.FC = () => {
  // React RouterのuseParamsフックを使用して画面遷移前のパラメータから情報を取得
  const { catId } = useParams<{ cat_id: string }>();
  const { name } = useParams<{ name: string }>();
  const { breed } = useParams<{ breed: string }>();
  const { image } = useParams<{ image: string }>();
  const { date_of_birth } = useParams<{ date_of_birth: string }>();
  const { sex } = useParams<{ sex: string }>();
  const { status } = useParams<{ status: string }>();
  const { UserUid } = useParams<{ uid: string }>();

  // ローカルストレージからログインしているユーザーのUIDを取得
  const loginUserUid = localStorage.getItem('uid');

  // ログインしているユーザーのUIDと猫のUIDが一致した場合にボタンを表示する
  const isShowButton = loginUserUid === UserUid;

  // 性別が「0」の場合は「男の子」、性別が「1」の場合は「女の子」、それ以外の場合は「不明」と表示する
  let genderText;
  switch (sex) {
    case '0':
      genderText = '男の子';
      break;
    case '1':
      genderText = '女の子';
      break;
    default:
      genderText = '不明';
  }

  // ステータスが「1」の場合は「募集中」、ステータスが「2」の場合は「お見合い中」、ステータスが「3」の場合は「里親決定」と表示する
  let statusText;
  switch (status) {
    case '1':
      statusText = '募集中';
      break;
    case '2':
      statusText = 'お見合い中';
      break;
    case '3':
      statusText = '里親決定';
      break;
    default:
      statusText = '不明';
  }

  return (
    <ContainerTemplate>
      <Header />
      <PageTemplate>
        <H2Header>{name}</H2Header>
        <p className="p-top__description">{/* ここに猫の説明などを表示する変数やデータを入れる */}</p>
        <div className="p-top__container">
          <table>
            <tbody>
              <tr>
                <td>写真:</td>
                <td>
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
      </PageTemplate>
    </ContainerTemplate>
  );
};

export default CatShow;
