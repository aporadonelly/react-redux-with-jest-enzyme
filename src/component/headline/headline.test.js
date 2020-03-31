import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAtrr, checkProps } from '../../../utils';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline component', () => {
  describe('Checking proptypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test desc',
        tempArr: [
          {
            fName: 'Nelly',
            lName: 'Test',
            age: 100,
            email: 'nelly@gmail.com',
            onlineStatus: false
          }
        ]
      };

      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test desc'
      };
      wrapper = setUp(props);
    });

    it('Should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });

    it('Should render h1', () => {
      const header = findByTestAtrr(wrapper, 'header');
      expect(header.length).toBe(1);
    });

    it('Should render desc', () => {
      const desc = findByTestAtrr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Have NO props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('Should not render', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });
  });
});
