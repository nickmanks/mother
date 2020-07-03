import * as React from 'react';
import { Diff } from './styled';
import { getRandomColor } from '../../theme/helpers';

export const getChildren = (
    children: React.ReactNode | Array<React.ReactNode>,
    limit?: number,
) => {
    if (limit && Array.isArray(children)) {
        return children.slice(0, limit);
    }

    return children;
};

export const getDiff = (
    children?: React.ReactNode | Array<React.ReactNode>,
    limit?: number,
) => {
    if (Array.isArray(children)) {
        const number = limit === undefined ? children.length : limit;
        const difference = children.length - number;

        if (difference > 0) {
            return (
                <Diff color={getRandomColor()}>
                    <span>{`+${difference}`}</span>
                </Diff>
            );
        }
    }

    return null;
};
