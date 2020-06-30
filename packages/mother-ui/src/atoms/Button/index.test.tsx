import * as React from 'react';
import { mount } from 'enzyme';
import Button from '.';

describe('<Button />', () => {
    it('calls the onClick prop when button is clicked', () => {
        const onClick = jest.fn();
        const wrapper = mount(<Button onClick={onClick} />);

        const button = wrapper.find('button');
        button.simulate('click');

        expect(onClick).toHaveBeenCalled();
    });
});
