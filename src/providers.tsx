import { FC, useEffect, useState } from 'react';
import GitHubProvider from './providers/github-provider';
import { ResetCSS } from './global/resetCSS';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './components/Wrapper/styled';

const Providers: FC = () => {
    const [Dark, setDark] = useState<boolean>(false);
    useEffect(() => {
        console.log(Dark);
    }, [Dark]);

    return (
        <Wrapper>
            <ThemeProvider theme={{ color: Dark }}>
                <button onClick={() => setDark(!Dark)}>Trocar Tema</button>
                <GitHubProvider>
                    <ResetCSS color={Dark} />
                    <App />
                </GitHubProvider>
            </ThemeProvider>
        </Wrapper>
    );
};

export default Providers;
