import App from './App';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore } from './../utils';
import React from 'react';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  //   console.log(wrapper.debug());
  return wrapper;
};

describe('App component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Sample text 1',
          body: 'Sample body'
        },
        {
          title: 'Sample text 2',
          body: 'Sample body'
        },
        {
          title: 'Sample text 3',
          body: 'Sample body'
        }
      ]
    };
    wrapper = setUp(initialState);
  });

  it('Should render without errors', () => {
    const component = findByTestAtrr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });
});
