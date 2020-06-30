import * as React from 'react';
import styled from 'styled-components';
import Button from '.';

const notes = `
    # Button

    This component is a UI wrapper around the standard React HTML \`<button>\` element.

    On top of the props listed in the props table, all standard React
    \`HTMLElement\` and \`HTMLButtonElement\` props are available.
    
    See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
`;

export default {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        notes,
    },
};

const ButtonContainer = styled.div`
    button {
        margin: 1rem;
    }
`;

const IconButtonContainer = styled.div`
    display: flex;

    button {
        margin: 1rem;
    }
`;

export const all = () => (
    <ButtonContainer>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="white">White</Button>
        <Button variant="transparent">Transparent</Button>
    </ButtonContainer>
);

export const rounded = () => <Button rounded>Pill shaped</Button>;

export const disabled = () => <Button disabled>Disabled</Button>;

export const icon = () => (
    <IconButtonContainer>
        <Button prepend="AirplaneSolid">Prepend Icon</Button>
        <Button append="ChromeBackMirrored">Append Icon</Button>
    </IconButtonContainer>
);

export const customStyles = () => (
    <IconButtonContainer>
        <Button className="custom-button">Custom Styles</Button>
        <Button prepend="AirplaneSolid" iconClass="custom-button-icon">
            Custom Icon Styles
        </Button>
    </IconButtonContainer>
);
