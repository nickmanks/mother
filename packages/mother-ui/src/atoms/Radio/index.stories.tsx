import * as React from 'react';
import RadioGroup from '../RadioGroup';
import Radio from '.';

const notes = `
    # Radio

    This component is a UI wrapper around the standard React HTML \`<input>\` element.

    On top of the props listed in the props table, all standard React
    \`HTMLElement\` and \`HTMLInputElement\` props are available.
    
    See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
`;

export default {
    title: 'Atoms/Radio',
    component: Radio,
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

export const selected = () => <Radio selected>Selected</Radio>;

export const disabled = () => <Radio disabled>Disabled</Radio>;

export const customStyles = () => (
    <Radio className={'custom-radio'}>Custom styles</Radio>
);
