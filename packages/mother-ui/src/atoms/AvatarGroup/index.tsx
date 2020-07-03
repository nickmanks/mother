import * as React from 'react';
import { AvatarGroup as StyledAvatarGroup } from './styled';
import { getChildren, getDiff } from './helpers';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Avatar components
     */
    children?: React.ReactNode | Array<React.ReactNode>;

    /**
     * Custom class name
     */
    className?: string;

    /**
     * Max number of avatars to show
     */
    limit?: number;
}

const AvatarGroup: React.FC<Props> = ({ children, className, limit }) => (
    <StyledAvatarGroup className={className}>
        {getChildren(children, limit)}
        {getDiff(children, limit)}
    </StyledAvatarGroup>
);

export default AvatarGroup;
