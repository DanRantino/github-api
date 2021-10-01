import { FC } from 'react';
import * as S from './styled';

type props = {
    name: string;
    linkToRepo: string;
    fullName: string;
};
const RepositoryItem: FC<props> = ({ name, linkToRepo, fullName }) => {
    return (
        <S.Wrapper>
            <S.WrapperTitle>{name}</S.WrapperTitle>
            <S.WrapperFullName>full name:</S.WrapperFullName>
            <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
                {fullName}
            </S.WrapperLink>
        </S.Wrapper>
    );
};

export default RepositoryItem;
