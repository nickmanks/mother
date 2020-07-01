import * as React from 'react';
import {
    Button as StyledButton,
    InnerContainer,
    PrependIcon,
    AppendIcon,
} from './styled';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * A child component
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

    /**
     * Custom icon class name
     */
    iconClass?: string;
}

const Button: React.FC<Props> = ({
    children,
    theme,
    className,
    variant,
    rounded,
    prepend,
    append,
    iconClass,
    ...htmlButtonProps
}) => (
    <StyledButton
        theme={theme}
        className={className}
        variant={variant}
        rounded={rounded}
        {...htmlButtonProps}
    >
        <InnerContainer>
            {prepend && (
                <PrependIcon
                    className={iconClass}
                    name={prepend}
                    variant={variant === 'transparent' ? 'dark' : 'white'}
                    size={18}
                />
            )}
            <div>{children}</div>
            {append && (
                <AppendIcon
                    className={iconClass}
                    name={append}
                    variant={variant === 'transparent' ? 'dark' : 'white'}
                    size={18}
                />
            )}
        </InnerContainer>
    </StyledButton>
);

export default Button;
