import * as React from 'react';
import { Wrapper, WarningBody, WarningDot } from './styled';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
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
}

const SweetWarning: React.FC<Props> = ({ theme, className, variant }) => (
    <Wrapper theme={theme} className={className} variant={variant}>
        <WarningBody theme={theme} variant={variant} />
        <WarningDot theme={theme} variant={variant} />
    </Wrapper>
);

export default SweetWarning;
