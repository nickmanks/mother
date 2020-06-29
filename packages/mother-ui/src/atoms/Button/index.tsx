import * as React from 'react';
import { Button as StyledButton } from './styled';

export type Props = {
    /**
     * A child component
     */
    children?: React.ReactNode | string;

    /**
     * Theme provider object
     */
    theme?: Theme;

    /**
     * A color variant
     */
    variant?: Variants;

    /**
     * True if button is pill shaped
     */
    rounded?: boolean;

    /**
     * True if button is disabled
     */
    disabled?: boolean;
};

const Button: React.FC<Props> = ({
    children,
    theme,
    variant,
    rounded,
    ...htmlButtonProps
}) => {
    return (
        <StyledButton
            theme={theme}
            variant={variant}
            rounded={rounded}
            {...htmlButtonProps}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
