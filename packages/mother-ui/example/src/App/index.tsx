import React from 'react';
import { Theme, Button, Container, Icon, Input } from 'mother-ui';

const App: React.FC = () => (
    <Theme mode={'light'} layout={'cozy'}>
        <Container>
            <Input
                label={'Search'}
                prepend={'Search'}
                placeholder={'Search the things'}
            />
            <Button variant={'primary'}>Search</Button>
            <Button variant={'secondary'} rounded prepend="AirplaneSolid">
                Secondary Pill
            </Button>
            <Icon name="Archive" size={40} />
        </Container>
    </Theme>
);

export default App;
