import * as React from 'react';
import { Wrapper, Mark, Span } from './styled';

export interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * A child component
     */
    children?: string;

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
     * True if badge is circular
     */
    rounded?: boolean;
}

const Badge: React.FC<Props> = ({
    children,
    theme,
    className,
    variant,
    rounded,
}) =>
    rounded ? (
        <Wrapper theme={theme} className={className} variant={variant}>
            <Mark>{children}</Mark>
        </Wrapper>
    ) : (
        <Span theme={theme} className={className} variant={variant}>
            {children}
        </Span>
    );

export default Badge;
