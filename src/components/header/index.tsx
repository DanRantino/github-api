import { FC, useState } from 'react';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';
import { CgSun, HiMoon } from 'react-icons/all';
import { useDispatch, useSelector } from 'react-redux';

const Header: FC = () => {
    const theme = useSelector((state: boolean) => state);
    const [Theme, setTheme] = useState('Wheat');
    const [BackTheme, setBackTheme] = useState('Wheat');
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState<string>('');
    const dispatch = useDispatch();

    function alterTheme() {
        dispatch({ type: 'THEME_INITIAL' });
    }

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        if (getUser) return getUser(usernameForSearch);
    };
    const changeTheme = () => {
        !theme ? setTheme('Grey') : setTheme('Wheat');
        Theme === 'Grey' ? setBackTheme('Grey') : setBackTheme('Wheat');
        alterTheme();
    };
    const icon = Theme === 'Grey' ? <HiMoon size={40} /> : <CgSun size={40} />;
    return (
        <header>
            <S.Wrapper>
                <input
                    type='text'
                    placeholder='Digite o username para pesquisa...'
                    onChange={event => setUsernameForSearch(event.target.value)}
                />
                <S.Button type='submit' onClick={submitGetUser}>
                    <span>Buscar</span>
                </S.Button>
                <S.Toggle backTheme={BackTheme} theme={{ Theme }} onClick={changeTheme}>
                    {icon}
                </S.Toggle>
            </S.Wrapper>
        </header>
    );

};

export default Header;
