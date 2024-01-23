import React from 'react';

import { H2Header } from '../../parts/H2Header';
import { Header } from '../../templates/Header';
import { ContainerTemplate } from '../../templates/ContainerTemplate';
import { PageTemplate } from '../../templates/PageTemplate';

const Top: React.FC = () => {
  return (
    <ContainerTemplate>
      <Header />
      <PageTemplate>
          <H2Header>猫募集一覧</H2Header>
          <p className="p-top__description">お気に入りの猫を見つけよう♪</p>
          <div className='p-top__container'>
            <div className="p-top__serch">ここは検索エリアどす。。。</div>
            <ul className="p-top__cat-list">
              <li>
                <div><img src="http://pj-5bucket.s3.ap-northeast-1.amazonaws.com/test-cat.png" alt="猫の写真" /></div>
                <p>ねこ太郎</p>
                <p>2023年1月1日生まれ</p>
                <p>男の子</p>
                <p>東京都</p>
              </li>
            </ul>
          </div>
      </PageTemplate>
    </ContainerTemplate>
  );
};

export default Top;
