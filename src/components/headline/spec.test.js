import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import checkPropTypes from 'check-prop-types';

import { findByAtrr, checkProps } from '../../../utils';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline component', () => {
  //checking proptypes
  describe('Checking proptypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        header: 'Test header',
        desc: 'Test desc',
        tempArr: [
          {
            fName: 'Test fName',
            lName: 'Test lName',
            email: 'test@gmail.com',
            age: 23,
            onlineStatus: true
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
      const component = findByAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });

    it('Should render H1', () => {
      const header = findByAtrr(wrapper, 'header');
      expect(header.length).toBe(1);
    });

    it('Should render desc', () => {
      const desc = findByAtrr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('Should not render', () => {
      const header = findByAtrr(wrapper, 'header');
      expect(header.length).toBe(0);
    });
    it('Should not render', () => {
      const desc = findByAtrr(wrapper, 'desc');
      expect(desc.length).toBe(0);
    });

    it('Should not render', () => {
      const HeadlineComponent = findByAtrr(wrapper, 'HeadlineComponent');
      expect(HeadlineComponent.length).toBe(0);
    });
  });
});
