import { createContext, FC, useCallback, useState } from 'react';
import api from '../services/api';
import { CtxGitHub, CtxGitHubState, CtxRepositories, CtxUser } from '../types';

export const GitHubContext = createContext<CtxGitHub>({
    githubState: {
        loading: false,
        user: {
            id: '',
            avatar: '',
            login: '',
            name: '',
            html_url: '',
            blog: '',
            company: '',
            location: '',
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    },
    getUser: () => {
        // need something
    },
    getUserRepos: () => {
        // need something,
    },
    getUserStarred: () => {
        // need something},
    },
});

const GitHubProvider: FC = ({ children }) => {
    const [githubState, setGithubState] = useState<CtxGitHubState>({
        hasUser: false,
        loading: false,
        user: {
            id: '',
            avatar: '',
            login: '',
            name: '',
            html_url: '',
            blog: '',
            company: '',
            location: '',
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    });

    const getUser = async (username: string) => {
        const Resp = await api.get(`users/${username}`);
        const User = Resp.data as CtxUser;
        setGithubState(prevState => ({
            ...prevState,
            user: User,
        }));
    };
    const getUserRepos = async (username: string) => {
        const Resp = await api.get(`users/${username}/repos`);
        const Repos = Resp.data as Array<CtxRepositories>;
        setGithubState(prevState => ({
            ...prevState,
            repositories: [...Repos],
        }));
    };
    const getUserStarred = async (username: string) => {
        const Resp = await api.get(`users/${username}/repos`);
        const Starred = Resp.data as Array<CtxRepositories>;
        setGithubState(prevState => ({
            ...prevState,
            starred: [...Starred],
        }));
    };

    const contextValue: CtxGitHub = {
        githubState,
        getUser: useCallback(username => getUser(username), []),
        getUserRepos: useCallback(username => getUserRepos(username), []),
        getUserStarred: useCallback(username => getUserStarred(username), []),
    };
    return (
        <GitHubContext.Provider value={contextValue}>
            {children}
        </GitHubContext.Provider>
    );
};

export default GitHubProvider;
