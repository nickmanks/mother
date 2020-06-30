import * as React from 'react';
import styled from 'styled-components';
import Checkbox from '.';

const notes = `
    # Checkbox

    This component is a UI wrapper around the standard React HTML \`<input>\` element.

    On top of the props listed in the props table, all standard React
    \`HTMLElement\` and \`HTMLInputElement\` props are available.
    
    See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
`;

export default {
    title: 'Atoms/Checkbox',
    component: Checkbox,
    parameters: {
        notes,
    },
};

const CheckboxContainer = styled.div`
    display: flex;

    label {
        margin-right: 1rem;
    }
`;

export const all = () => (
    <CheckboxContainer>
        <Checkbox variant="primary"> Primary </Checkbox>
        <Checkbox variant="secondary"> Secondary </Checkbox>
        <Checkbox variant="success"> Success </Checkbox>
        <Checkbox variant="warning"> Warning </Checkbox>
        <Checkbox variant="danger"> Danger </Checkbox>
        <Checkbox variant="info"> Info </Checkbox>
    </CheckboxContainer>
);

export const initial = () => (
    <Checkbox initial={true}> Default Checked </Checkbox>
);

export const disabled = () => <Checkbox disabled> Disabled </Checkbox>;

export const customStyles = () => (
    <Checkbox className={'custom-checkbox'}> Custom Styles </Checkbox>
);
