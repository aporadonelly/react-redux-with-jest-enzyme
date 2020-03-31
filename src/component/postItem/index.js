import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostItem extends Component {
  render() {
    const { desc, title } = this.props;

    if (!title) {
      return null;
    }
    
    return (
      <div data-test='postItemComponent'>
        <h2 data-test='title'>{title}</h2>
        <p data-test='desc'>{desc}</p>
      </div>
    );
  }
}
PostItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
};
export default PostItem;
