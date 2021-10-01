import { FC } from 'react';
import * as S from './styled';
import Header from '../header';

const Layout: FC = ({ children }) => {
  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;
