import * as React from 'react';
import ModalHeader from '../../atoms/ModalHeader';
import ModalContent from '../../atoms/ModalContent';
import ModalFooter from '../../atoms/ModalFooter';
import Button from '../../atoms/Button';
import { ModalOverlay, ModalContainer } from './styled';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * True if modal is open
     */
    open?: boolean;

    /**
     * Called when close icon is clicked
     */
    onClose?: () => void;
}

const Modal: React.FC<Props> = ({ open, onClose }) => (
    <ModalOverlay open={open}>
        <ModalContainer open={open}>
            <ModalHeader
                onClose={() => {
                    if (onClose) {
                        onClose();
                    }
                }}
            >
                Modal Header
            </ModalHeader>
            <ModalContent>Modal Content</ModalContent>
            <ModalFooter>
                <Button variant={'primary'}>Primary</Button>
                <Button variant={'transparent'}>Secondary</Button>
            </ModalFooter>
        </ModalContainer>
    </ModalOverlay>
);

export default Modal;
