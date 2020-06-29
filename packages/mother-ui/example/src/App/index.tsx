import React from 'react';
import { Theme, Button, Container } from 'mother-ui';

const App: React.FC = () => (
    <Theme mode={'light'} layout={'cozy'}>
        <Container>
            <Button variant={'danger'}>Danger</Button>
            <Button variant={'secondary'} rounded>
                Secondary Pill
            </Button>
        </Container>
    </Theme>
);

export default App;
