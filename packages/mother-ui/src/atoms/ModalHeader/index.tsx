import * as React from 'react';
import { ModalHeader as StyledModalHeader, StyledIcon } from './styled';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * A child component
     */
    children?: React.ReactNode | string;

    /**
     * Called when close icon is clicked
     */
    onClose?: () => void;
}

const ModalHeader: React.FC<Props> = ({ children, onClose }) => (
    <StyledModalHeader>
        {children}
        <StyledIcon
            name={'Clear'}
            size={16}
            onClick={() => {
                if (onClose) {
                    onClose();
                }
            }}
        />
    </StyledModalHeader>
);

export default ModalHeader;
