import React from 'react';
import { shallow } from 'enzyme';
import App from './index';
import Dropdown from '../Dropdown';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders a one <App /> component', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a one <Dropdown /> within <App />', () => {
    expect(wrapper.find(Dropdown).length).toEqual(1);
  });
});
