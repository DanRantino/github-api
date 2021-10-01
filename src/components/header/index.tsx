import { FC, useState } from 'react';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';

const Header: FC = () => {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState<string>('');

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        if (getUser) return getUser(usernameForSearch);
    };

    return (
        <header>
            <S.Wrapper>
                <input
                    type="text"
                    placeholder="Digite o username para pesquisa..."
                    onChange={event => setUsernameForSearch(event.target.value)}
                />
                <button type="submit" onClick={submitGetUser}>
                    <span>Buscar</span>
                </button>
            </S.Wrapper>
        </header>
    );
};

export default Header;
