import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByAtrr } from '../../../utils';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline component', () => {
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
