import * as React from 'react';
import Radio from '../Radio';
import RadioGroup from '.';

const notes = `
    # RadioGroup

    This component uses a context to decide which radio
    child is the currently selected radio
`;

export default {
    title: 'Atoms/RadioGroup',
    component: RadioGroup,
    parameters: {
        notes,
    },
};

export const all = () => (
    <RadioGroup>
        <Radio variant="primary"> Primary </Radio>
        <Radio variant="secondary"> Secondary </Radio>
        <Radio variant="success"> Success </Radio>
        <Radio variant="warning"> Warning </Radio>
        <Radio variant="danger"> Danger </Radio>
        <Radio variant="info"> Info </Radio>
    </RadioGroup>
);

export const vertical = () => (
    <RadioGroup vertical>
        <Radio>One</Radio>
        <Radio>Two</Radio>
        <Radio>Three</Radio>
        <Radio>Four</Radio>
        <Radio disabled>Disabled</Radio>
    </RadioGroup>
);

export const customStyles = () => (
    <RadioGroup className={'custom-radio-group'}>
        <Radio>Custom</Radio>
        <Radio>Styles</Radio>
    </RadioGroup>
);
