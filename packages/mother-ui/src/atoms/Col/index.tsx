import * as React from 'react';
import { useContext } from 'react';
import { Col as StyledCol } from './styled';
import { RowContext } from '../Row';
import { getSize } from './helpers';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Child components or strings
     */
    children?: React.ReactNode | string;

    /**
     * Theme provider object
     */
    theme?: Theme;

    /**
     * Custom class name
     */
    className?: string;

    /**
     * Size of the column (0-12)
     */
    size?: number;
}

const Col: React.FC<Props> = ({
    children,
    theme,
    className,
    size,
    ...htmlDivProps
}) => {
    const rowContext = useContext(RowContext);

    return (
        <StyledCol
            theme={theme}
            className={className}
            size={size || getSize(rowContext)}
            {...htmlDivProps}
        >
            {children}
        </StyledCol>
    );
};

export default Col;
