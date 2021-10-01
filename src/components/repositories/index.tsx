import { FC, useEffect, useState } from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';
import RepositoryItem from '../repository-item';
import { CtxRepositories } from '../../types';

const Repositories: FC = () => {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchrepos, setHasUserForSerachrepos] = useState<
        CtxRepositories[] | undefined | boolean
    >(false);

    useEffect(() => {
        if (githubState.user.login) {
            if (getUserRepos && getUserStarred) {
                getUserRepos(githubState.user.login);
                getUserStarred(githubState.user.login);
            }
            setHasUserForSerachrepos(githubState.repositories);
        }
    }, [githubState.user.login]);

    return (
        <>
            {hasUserForSearchrepos ? (
                <S.WrapperTabs
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected"
                >
                    <S.WrapperTabList>
                        <S.WrapperTab>Repositories</S.WrapperTab>
                        <S.WrapperTab>Starred</S.WrapperTab>
                    </S.WrapperTabList>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {githubState.repositories.map(
                                (item, index: number) => (
                                    <RepositoryItem
                                        key={item.id}
                                        name={item.name}
                                        linkToRepo={item.full_name}
                                        fullName={item.full_name}
                                    />
                                )
                            )}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                    <S.WrapperList>
                        {githubState.starred.map((item, index: number) => (
                            <RepositoryItem
                                key={item.id}
                                name={item.name}
                                linkToRepo={item.full_name}
                                fullName={item.full_name}
                            />
                        ))}
                    </S.WrapperList>
                </S.WrapperTabs>
            ) : (
                <></>
            )}
        </>
    );
};
export default Repositories;
