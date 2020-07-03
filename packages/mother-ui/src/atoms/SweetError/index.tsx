import * as React from 'react';
import {
    Wrapper,
    Cross,
    LeftCross,
    RightCross,
    Placeholder,
    Fix,
} from './styled';

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

const SweetError: React.FC<Props> = ({ theme, className, variant }) => (
    <Wrapper theme={theme} className={className} variant={variant}>
        <Cross>
            <LeftCross theme={theme} variant={variant} />
            <RightCross theme={theme} variant={variant} />
        </Cross>
        <Placeholder theme={theme} variant={variant} />
        <Fix />
    </Wrapper>
);

export default SweetError;
