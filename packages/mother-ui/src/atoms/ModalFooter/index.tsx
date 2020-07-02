import * as React from 'react';
import { ModalFooter as StyledModalFooter } from './styled';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Child button components (max 3 nodes)
     */
    children?: React.ReactNode | Array<React.ReactNode>;
}

const ModalFooter: React.FC<Props> = ({ children }) => {
    if (children) {
        if (Array.isArray(children)) {
            return (
                <StyledModalFooter set={children.length}>
                    {children[2]}
                    <div>
                        {children[1]}
                        {children[0]}
                    </div>
                </StyledModalFooter>
            );
        }

        return <StyledModalFooter set={1}>{children}</StyledModalFooter>;
    }

    return null;
};

export default ModalFooter;
