import * as React from 'react';
import Icon from '../Icon';
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

    /**
     * Icon name to prepend
     */
    prepend?: string;

    /**
     * Icon name to append
     */
    append?: string;
};

const Button: React.FC<Props> = ({
    children,
    theme,
    variant,
    rounded,
    prepend,
    append,
    ...htmlButtonProps
}) => {
    return (
        <StyledButton
            theme={theme}
            variant={variant}
            rounded={rounded}
            {...htmlButtonProps}
        >
            {prepend && <Icon name={prepend} variant={'white'} />}
            {children}
            {append && <Icon name={append} variant={'white'} />}
        </StyledButton>
    );
};

export default Button;
