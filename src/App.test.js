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

  //hideBtn method testing
  it('exampleMethod_udpateState should update state as expected', () => {
    const classInstance = wrapper.instance(); //create an instance of a class
    classInstance.exampleMethod_updateState(); //use the method
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  //another method test
  it('exampleMethod_returnsAValue should return a value as expected', () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.exampleMethod_returnsAValue(6);
    expect(newValue).toBe(7);
  });
});
