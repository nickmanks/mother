import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * True if radio children should be aligned vertically
     */
    vertical?: boolean;
}

export const RadioGroup = styled.div<Props>`
    display: ${({ vertical }) => (vertical ? 'grid' : 'flex')};

    label {
        margin-right: ${({ vertical }) => (vertical ? 'unset' : '1.5rem')};
    }
`;
