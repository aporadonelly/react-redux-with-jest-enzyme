import React from 'react';
import { findByTestAtrr, checkProps } from '../../../utils';
import SharedBtn from '../button/index';
import { shallow } from 'enzyme';

describe('SharedButton component', () => {
  describe('Checking proptypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        btnText: 'Example text',
        emitEvent: () => {}
      };
      const propsErr = checkProps(SharedBtn, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        btnText: 'Example text',
        emitEvent: () => {}
      };

      wrapper = shallow(<SharedBtn {...props} />);
    });

    it('Should render a button', () => {
      const button = findByTestAtrr(wrapper, 'btnComponent');
      expect(button.length).toBe(1);
    });
  });
});
