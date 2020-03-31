import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SharedBtn extends Component {
  submitEvent() {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  }
  render() {
    const { btnText } = this.props;
    return (
      <div>
        <button data-test='btnComponent' onClick={() => this.submitEvent()}>
          {btnText}
        </button>
      </div>
    );
  }
}
SharedBtn.propTypes = {
  btnText: PropTypes.string,
  emitEvent: PropTypes.func
};
export default SharedBtn;
