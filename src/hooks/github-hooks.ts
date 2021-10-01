import { useContext } from 'react';
import { GitHubContext } from '../providers/github-provider';
import { CtxGitHub } from '../types';

const useGithub = (): CtxGitHub => {
    const { githubState, getUser, getUserRepos, getUserStarred } =
        useContext(GitHubContext);
    return { githubState, getUser, getUserRepos, getUserStarred };
};

export default useGithub;
