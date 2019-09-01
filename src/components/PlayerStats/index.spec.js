import React from 'react';
import { shallow } from 'enzyme';
import PlayerStats from './index';
import { players } from '../../data/data.json';

describe('<PlayerStats />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PlayerStats data={players} />);
  });

  it('renders one <PlayerStats /> component', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
});
