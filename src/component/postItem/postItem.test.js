import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAtrr } from '../../../utils';
import PostItem from './index';

describe('PostItem component', () => {
  describe('Checking proptypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        title: 'Test title',
        desc: 'Test desc'
      };
      const propsErr = checkProps(PostItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Component render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Test title',
        desc: 'Test desc'
      };
      wrapper = shallow(<PostItem {...props} />);
    });

    it('Should render without error', () => {
      const component = findByTestAtrr(wrapper, 'postItemComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const title = findByTestAtrr(wrapper, 'title');
      expect(title.length).toBe(1);
    });

    it('Should render a desc', () => {
      const desc = findByTestAtrr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Component should NOT render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Test desc'
      };
      wrapper = shallow(<PostItem {...props} />);
    });

    it('Component is not rendered', () => {
      const component = findByTestAtrr(wrapper, 'postItemComponent');
      expect(component.length).toBe(0);
    });
  });
});
