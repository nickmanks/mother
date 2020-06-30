import React from 'react';
import { Theme, Button, Container, Icon } from 'mother-ui';

const App: React.FC = () => (
    <Theme mode={'light'} layout={'cozy'}>
        <Container>
            <Button variant={'danger'}>Danger</Button>
            <Button variant={'secondary'} rounded prepend="AirplaneSolid">
                Secondary Pill
            </Button>
            <Icon name="Archive" size={40} />
        </Container>
    </Theme>
);

export default App;
