import * as React from 'react';
import styled from 'styled-components';
import Input from '.';

const notes = `
    # Input

    This component is a UI wrapper around the standard React HTML \`<input>\` element.

    On top of the props listed in the props table, all standard React
    \`HTMLElement\` and \`HTMLInputElement\` props are available.
    
    See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
`;

export default {
    title: 'Atoms/Input',
    component: Input,
    parameters: {
        notes,
    },
};

const InputContainer = styled.div`
    > div {
        margin-top: 1rem;
    }
`;

export const all = () => <Input placeholder={'Basic input'} />;

export const label = () => (
    <Input placeholder={'Input label'} label={'Label here'} />
);

export const icons = () => (
    <InputContainer>
        <Input placeholder={'Search the things'} prepend={'Search'} />
        <Input placeholder={'Look at this data'} append={'DelveAnalytics'} />
    </InputContainer>
);

export const variants = () => (
    <InputContainer>
        <Input
            placeholder={'Primary'}
            label={'Primary'}
            prepend={'HomeGroup'}
        />
        <Input
            variant={'secondary'}
            placeholder={'Secondary'}
            label={'Secondary'}
            prepend={'Commitments'}
        />
        <Input
            variant={'success'}
            placeholder={'Success'}
            label={'Success'}
            append={'Accept'}
        />
        <Input
            variant={'danger'}
            placeholder={'Danger'}
            label={'Danger'}
            append={'AlertSolid'}
        />
        <Input
            variant={'warning'}
            placeholder={'Warning'}
            label={'Warning'}
            append={'Warning'}
        />
        <Input
            variant={'info'}
            placeholder={'Info'}
            label={'Info'}
            prepend={'Hotel'}
        />
    </InputContainer>
);

export const fillVariants = () => (
    <InputContainer>
        <Input
            placeholder={'Primary'}
            label={'Primary'}
            prepend={'HomeGroup'}
            fill
        />
        <Input
            variant={'secondary'}
            placeholder={'Secondary'}
            label={'Secondary'}
            prepend={'Commitments'}
            fill
        />
        <Input
            variant={'success'}
            placeholder={'Success'}
            label={'Success'}
            append={'Accept'}
            fill
        />
        <Input
            variant={'danger'}
            placeholder={'Danger'}
            label={'Danger'}
            append={'AlertSolid'}
            fill
        />
        <Input
            variant={'warning'}
            placeholder={'Warning'}
            label={'Warning'}
            append={'Warning'}
            fill
        />
        <Input
            variant={'info'}
            placeholder={'Info'}
            label={'Info'}
            prepend={'Hotel'}
            fill
        />
    </InputContainer>
);

export const disabled = () => (
    <InputContainer>
        <Input placeholder={'Disabled'} disabled />
        <Input
            placeholder={'Disabled with icon'}
            prepend={'HomeGroup'}
            disabled
        />
    </InputContainer>
);

export const customStyles = () => (
    <InputContainer>
        <Input
            className={'custom-input'}
            placeholder={'Custom styles'}
            label={'Custom'}
            prepend={'HomeGroup'}
        />
        <Input
            iconClass={'custom-input-icon'}
            placeholder={'Custom icon styles'}
            prepend={'HomeGroup'}
        />
    </InputContainer>
);
