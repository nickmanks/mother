import * as React from 'react';
import Snackbar from '.';

const notes = `
    # Snackbar
`;

export default {
    title: 'Atoms/Snackbar',
    component: Snackbar,
    parameters: {
        notes,
    },
};

export const all = () => <Snackbar>This is a snack alert!</Snackbar>;

export const variant = () => (
    <Snackbar variant={'info'}>Info variant alert!</Snackbar>
);

export const delay = () => (
    <Snackbar delay={5000}>Will disappear after 5 seconds</Snackbar>
);

export const bottom = () => (
    <Snackbar bottom>Will show from the bottom</Snackbar>
);

export const prepend = () => (
    <Snackbar variant={'success'} prepend={'Archive'}>
        Your document was archived successfully!
    </Snackbar>
);

export const append = () => (
    <Snackbar variant={'danger'} append={'AlertSolid'}>
        An error occurred while fetching your data
    </Snackbar>
);

export const customStyles = () => (
    <Snackbar
        className={'custom-snackbar'}
        iconClass={'custom-snackbar-icon'}
        append={'AlertSolid'}
    >
        An error occurred while fetching your data
    </Snackbar>
);
