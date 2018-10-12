import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Dropdown from './components/Dropdown';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders an <App /> component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders <Dropdown /> within', () => {
    expect(wrapper.find(Dropdown).length).toEqual(1);
  })
});