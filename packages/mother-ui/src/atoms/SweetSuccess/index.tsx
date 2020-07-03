import * as React from 'react';
import { Wrapper, SuccessTip, SuccessLong, Placeholder, Fix } from './styled';

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

const SweetSuccess: React.FC<Props> = ({ theme, className, variant }) => (
    <Wrapper theme={theme} className={className} variant={variant}>
        <SuccessTip theme={theme} variant={variant} />
        <SuccessLong theme={theme} variant={variant} />
        <Placeholder theme={theme} variant={variant} />
        <Fix />
    </Wrapper>
);

export default SweetSuccess;
