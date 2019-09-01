import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './index';
import { players } from '../../data/data.json';

describe('<Dropdown />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Dropdown data={players} />);
  });

  it('renders one <Dropdown /> component', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('starts with `Alderweireld` option', () => {
    const select = wrapper.find('select');
    expect(select.props().value).toEqual('Alderweireld');
  });

  it('renders `Rooney` when this option is chosen', () => {
    // const select = wrapper.find('select'); ==> replacing to select below doesn't work?
    wrapper.find('select').simulate('change', { target: { value: 'Rooney' } });
    expect(wrapper.find('select').props().value).toBe('Rooney');
  });
});
