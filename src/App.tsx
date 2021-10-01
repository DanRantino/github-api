import { FC } from 'react';
import Layout from './components/layout';
import useGithub from './hooks/github-hooks';
import Profile from './components/profile';
import Repositories from './components/repositories';

const App: FC = () => {
    const { githubState } = useGithub();

    return (
        <Layout>
            {githubState.hasUser ? (
                <>
                    <p>Loading</p>
                </>
            ) : (
                <>
                    <Profile />
                    <Repositories />
                </>
            )}
        </Layout>
    );
};

export default App;
