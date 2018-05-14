import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from './App';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
    const props = {}

    const wrapper = shallow(<App {...props} />)

    return { 
        props,
        wrapper
    }
}

describe('App component', () => {
    it('should renders without crashing', () => {
        const { wrapper } = setup();

        expect(wrapper.find('.app').exists()).toEqual(true);
    })

    it('should render a buttons', () => {
        const { wrapper } = setup();

        expect(wrapper.find('button')).toHaveLength(2);
    })
})