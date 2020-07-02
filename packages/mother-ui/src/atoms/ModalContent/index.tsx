import * as React from 'react';
import { ModalContent as StyledModalContent } from './styled';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * A child node
     */
    children?: React.ReactNode;
}

const ModalContent: React.FC<Props> = ({ children }) => (
    <StyledModalContent>{children}</StyledModalContent>
);

export default ModalContent;
