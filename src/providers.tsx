import { FC } from 'react';
import GitHubProvider from './providers/github-provider';
import { ResetCSS } from './global/resetCSS';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './components/Wrapper/styled';
import { useSelector } from 'react-redux';

const Providers: FC = () => {
    const theme = useSelector((state: boolean) => state);

    return (
        <Wrapper>
            <ThemeProvider theme={{ color: theme }}>
                <GitHubProvider>
                    <ResetCSS color={theme} />
                    <App />
                </GitHubProvider>
            </ThemeProvider>
        </Wrapper>
    );
};

export default Providers;
