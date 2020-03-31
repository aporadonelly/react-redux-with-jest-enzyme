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
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        btnText: 'Example text',
        emitEvent: mockFunc
      };

      wrapper = shallow(<SharedBtn {...props} />);
    });

    it('Should render a button', () => {
      const button = findByTestAtrr(wrapper, 'btnComponent');
      expect(button.length).toBe(1);
    });

    it('Should emit callback on emit event', () => {
      const button = findByTestAtrr(wrapper, 'btnComponent');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
