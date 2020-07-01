/* eslint-env jest */
import * as React from 'react';
import { configure } from 'enzyme';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

type IconProps = {
    iconName?: string;
};

jest.mock('@fluentui/react/lib/Icon', () => ({
    // eslint-disable-next-line react/display-name
    Icon: ({ iconName }: IconProps) => {
        return <i>{iconName}</i>;
    },
}));

jest.mock('lodash.uniqueId', () => ({
    __esModule: true,
    default: () => 'test-id',
}));

jest.mock('../theme/helpers', () => ({
    ...require.requireActual('../theme/helpers'),
    getRandomColor: jest.fn(() => '#random'),
}));
