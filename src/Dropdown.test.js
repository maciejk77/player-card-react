import React from 'react';
import { shallow, mount } from 'enzyme';
import DropDown from './components/Dropdown.js';
import PlayerStats from './components/PlayerStats';

describe('<Dropdown />', () => {
  
    it('renders <Dropdown /> component', () => {
        const wrapper = shallow(<DropDown />);      
        expect(wrapper).toMatchSnapshot();
    });

    // it('has a <select> dropdown', () => {
    //     const wrapper = mount(<PlayerStats />);
    //     expect(wrapper.find('.dropdown__select').length).toEqual(1);
    // });
});
