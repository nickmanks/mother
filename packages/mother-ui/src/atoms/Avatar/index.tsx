import * as React from 'react';
import Icon from '../Icon';
import { Avatar as StyledAvatar } from './styled';
import { getInitials } from './helpers';
import { getRandomColor } from '../../theme/helpers';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Name of person
     */
    children?: string;

    /**
     * Custom class name
     */
    className?: string;

    /**
     * Image src for avatar picture
     */
    src?: string;

    editable?: boolean;
}

const Avatar: React.FC<Props> = ({ children, className, src, editable }) => (
    <StyledAvatar className={className} color={getRandomColor()}>
        {src && <img src={src} />}
        {children && <span>{getInitials(children)}</span>}
        {editable && <Icon name={'Edit'} size={10} />}
    </StyledAvatar>
);

export default Avatar;
