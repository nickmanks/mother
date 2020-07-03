import styled from 'styled-components';

export const AvatarGroup = styled.div`
    display: flex;
    transition: all 0.2s ease;

    > div {
        transition: all 0.3s ease;
        display: inline-block;
        border: 3px solid white;
    }

    > div:not(:first-child) {
        margin-left: -14px;
    }

    &:hover {
        > div:not(:first-child) {
            margin-left: -2px;
        }
    }
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    color: string;
}

export const Diff = styled.div<Props>`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: #${({ color }) => color};
    text-align: center;
    position: relative;
    user-select: none;

    span {
        line-height: 50px;
        text-transform: uppercase;
        color: #fefefe;
    }
`;
