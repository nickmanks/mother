import styled from 'styled-components';
import { variants, grey02 } from '../../theme/colors';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    color: string;
}

export const Avatar = styled.div<Props>`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: #${({ color }) => color};
    text-align: center;
    position: relative;
    user-select: none;

    &:hover {
        i {
            color: ${variants.primary.color};
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    span {
        line-height: 50px;
        text-transform: uppercase;
        color: #fefefe;
    }

    i {
        position: absolute;
        right: -2px;
        bottom: -2px;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        cursor: pointer;
        padding: 5px;
        transition: color 0.2s;
        color: #2c3e50;
        background-color: ${grey02};
        z-index: 2;
    }
`;
