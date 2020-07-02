import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    Snackbar as StyledSnackbar,
    Inner,
    PrependIcon,
    AppendIcon,
} from './styled';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * A child component
     */
    children?: React.ReactNode | string;

    /**
     * Theme provider object
     */
    theme?: Theme;

    /**
     * Custom button class name
     */
    className?: string;

    /**
     * A color variant
     */
    variant?: Variants;

    /**
     * How long to show the snackbar in milliseconds
     */
    delay?: number;

    /**
     * True if show the snackbar at the bottom of the page
     */
    bottom?: boolean;

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

const Snackbar: React.FC<Props> = ({
    children,
    theme,
    className,
    variant,
    delay,
    bottom,
    prepend,
    append,
    iconClass,
}) => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        if (delay) {
            setTimeout(() => setOpen(false), delay);
        }
    }, []);

    return (
        <StyledSnackbar
            theme={theme}
            className={className}
            variant={variant}
            open={open}
            bottom={bottom}
        >
            {prepend && (
                <PrependIcon
                    className={iconClass}
                    name={prepend}
                    variant={variant === 'transparent' ? 'dark' : 'white'}
                    size={26}
                />
            )}
            <Inner prepend={prepend} append={append}>
                {children}
            </Inner>
            {append && (
                <AppendIcon
                    className={iconClass}
                    name={append}
                    variant={variant === 'transparent' ? 'dark' : 'white'}
                    size={26}
                />
            )}
        </StyledSnackbar>
    );
};

export default Snackbar;
