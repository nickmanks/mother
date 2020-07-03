import * as React from 'react';
import { ModalOverlay, ModalContainer as StyledModalContainer } from './styled';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Children of the modal
     */
    children?: React.ReactNode | Array<React.ReactNode>;

    /**
     * True if modal is open
     */
    open?: boolean;
}

const ModalContainer: React.FC<Props> = ({ children, open }) => (
    <ModalOverlay open={open}>
        <StyledModalContainer open={open}>{children}</StyledModalContainer>
    </ModalOverlay>
);

export default ModalContainer;
