import * as React from 'react';
import { Container as StyledContainer } from './styled';
import { maxWidth } from '../../theme/layout';

export type Props = {
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
     * Max width of container (e.g. 1200px or 100%)
     */
    width?: string;

    /**
     * All other standard React HTML `<div>` props
     */
    '...htmlDivProps'?: React.HTMLProps<HTMLDivElement>;
};

const Container: React.FC<Props> = ({
    children,
    theme,
    className,
    width,
    ...htmlDivProps
}) => (
    <StyledContainer
        theme={theme}
        className={className}
        width={width}
        {...htmlDivProps}
    >
        {children}
    </StyledContainer>
);
Container.defaultProps = {
    width: maxWidth,
};

export default Container;
