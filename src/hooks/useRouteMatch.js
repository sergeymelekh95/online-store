import { useLocation, matchPath } from 'react-router-dom';

export const useRouteMatch = (patterns) => {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i++) {
        const pattern = patterns[i];
        const possibleMatch = matchPath(pattern, pathname);
        if (possibleMatch !== null) {
            return possibleMatch;
        }
    }

    return null;
};
