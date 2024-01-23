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
      </PageTemplate>
    </ContainerTemplate>
  );
};

export default Top;
