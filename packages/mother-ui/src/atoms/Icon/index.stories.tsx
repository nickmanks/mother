import * as React from 'react';
import styled from 'styled-components';
import Icon from '.';

const notes = `
    # Icon

    This component is a UI wrapper around the 
    [@fluentui/Icons](https://github.com/microsoft/fluentui/tree/master/packages/icons)
    package.
`;

export default {
    title: 'Atoms/Icon',
    component: Icon,
    parameters: {
        notes,
    },
};

const IconContainer = styled.div`
    i {
        margin: 1rem;
    }
`;

export const all = () => (
    <IconContainer>
        <Icon variant="primary" name="AirplaneSolid" />
        <Icon variant="secondary" name="AccountManagement" />
        <Icon variant="success" name="ArrangeSendToBack" />
        <Icon variant="warning" name="AustralianRules" />
        <Icon variant="danger" name="AuthenticatorApp" />
        <Icon variant="info" name="BeerMug" />
    </IconContainer>
);

export const size = () => (
    <IconContainer>
        <Icon variant="primary" name="AirplaneSolid" size={14} />
        <Icon variant="secondary" name="AccountManagement" size={18} />
        <Icon variant="success" name="ArrangeSendToBack" size={22} />
        <Icon variant="warning" name="AustralianRules" size={26} />
        <Icon variant="danger" name="AuthenticatorApp" size={30} />
        <Icon variant="info" name="BeerMug" size={34} />
    </IconContainer>
);

export const customStyles = () => (
    <Icon name="AirplaneSolid" className="custom-icon" />
);
