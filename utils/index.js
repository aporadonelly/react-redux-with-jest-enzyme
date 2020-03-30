import checkPropTypes from 'check-prop-types';
import Headline from '../src/components/headline';

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name
  );
  return propsErr;
};

export const findByAtrr = (component, atrr) => {
  const wrapper = component.find(`[data-test='${atrr}']`);
  return wrapper;
};
