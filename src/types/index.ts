export type CtxUser = {
    id: string;
    avatar_url?: string;
    avatar?: string;
    login: string;
    name: string;
    html_url: string;
    blog: string;
    company: string;
    location: string;
    followers: number;
    following: number;
    public_gists: number;
    public_repos: number;
};

export type CtxGitHubState = {
    hasUser?: boolean;
    loading?: boolean;
    user: CtxUser;
    repositories: Array<CtxRepositories>;
    starred: Array<CtxRepositories>;
};
export type CtxRepositories = {
    id: number;
    name: string;
    full_name: string;
};
export type CtxGitHub = {
    githubState: CtxGitHubState;
    getUser?: (username: string) => void;
    getUserRepos?: (username: string) => void;
    getUserStarred?: (username: string) => void;
};
