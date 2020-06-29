import styled from 'styled-components';
import { rounding } from '../../theme/styles';
import { grey02, grey04 } from '../../theme/colors';

export const Inner = styled.div`
    background: ${grey02};
    height: 4rem;
    border: 1px solid ${grey04};
    border-radius: ${rounding.regular};
    text-align: center;
    margin: auto;
    margin-top: 1rem;
    width: 100%;
`;
