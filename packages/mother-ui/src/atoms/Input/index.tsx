import * as React from 'react';
import { useState } from 'react';
import {
    Wrapper,
    Label,
    OuterContainer,
    InnerContainer,
    PrependIcon,
    Input as StyledInput,
    AppendIcon,
    FocusedBorder,
} from './styled';

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
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
     * Label for above input
     */
    label?: string;

    /**
     * True if border always colored
     */
    fill?: boolean;

    /**
     * True if input is disabled
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

    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
    children,
    theme,
    className,
    variant,
    label,
    fill,
    disabled,
    prepend,
    append,
    iconClass,
    onFocus,
    onBlur,
    ...htmlInputProps
}) => {
    const [focused, setFocused] = useState(false);

    return (
        <Wrapper className={className}>
            {label && <Label>{label}</Label>}
            <OuterContainer>
                <InnerContainer focused={focused || fill} disabled={disabled}>
                    {prepend && (
                        <PrependIcon
                            theme={theme}
                            variant={variant}
                            className={iconClass}
                            name={prepend}
                            size={22}
                        />
                    )}
                    <StyledInput
                        disabled={disabled}
                        onFocus={(evt) => {
                            setFocused(true);

                            if (onFocus) {
                                onFocus(evt);
                            }
                        }}
                        onBlur={(evt) => {
                            setFocused(false);

                            if (onBlur) {
                                onBlur(evt);
                            }
                        }}
                        {...htmlInputProps}
                    />
                    {append && (
                        <AppendIcon
                            theme={theme}
                            variant={variant}
                            className={iconClass}
                            name={append}
                            size={22}
                        />
                    )}
                </InnerContainer>
                <FocusedBorder
                    theme={theme}
                    variant={variant}
                    focused={focused || fill}
                />
            </OuterContainer>
        </Wrapper>
    );
};

export default Input;
