import styled from 'styled-components';
import Icon from '../Icon';
import { variants } from '../../theme/colors';
import { fonts, fontFamily } from '../../theme/fonts';
import { rounding } from '../../theme/styles';

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    background: ${variants.light.color};
    font-size: ${fonts.size.s3}px;
    font-weight: ${fonts.weight.light};
    font-family: ${fontFamily};
    padding: 1rem;
    border-top-right-radius: ${rounding.regular};
    border-top-left-radius: ${rounding.regular};
`;

export const StyledIcon = styled(Icon)`
    color: ${variants.dark.color};
    margin-top: 4px;
    cursor: pointer;
`;
