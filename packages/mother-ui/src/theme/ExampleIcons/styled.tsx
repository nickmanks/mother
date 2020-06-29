import styled from 'styled-components';
import { variants, grey07 } from '../../theme/colors';

export const IconContainer = styled.div`
    height: 4rem;

    i {
        font-size: 30px;
        color: ${variants.primary.color};
    }

    p {
        font-size: 10px;
        color: ${grey07};
    }
`;
