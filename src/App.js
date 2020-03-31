import React, { Component } from 'react';
import './app.scss';
import Header from './component/header';
import Headline from './component/headline';
import SharedBtn from './component/button';
import PostItem from './component/postItem';
import { connect } from 'react-redux';
import { readPosts } from './actions';

const tempArr = [
  {
    fName: 'Nelly',
    lName: 'Test',
    email: 'nelly@gmail.com',
    age: 100,
    onlineStatus: true
  }
];

const initialState = {
  hideBtn: false
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };

    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.readPosts();
    this.exampleMethod_updateState();
  }

  exampleMethod_updateState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
  }

  //another simple method just for testing purposes
  exampleMethod_returnsAValue(num) {
    return num + 1;
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;

    const configBtn = {
      btnText: 'Get posts',
      emitEvent: this.fetch
    };
    return (
      <div className='App' data-test='appComponent'>
        <Header />
        <section className='main'>
          <Headline header='Posts' desc='Click me' tempArr={tempArr} />

          {!hideBtn && <SharedBtn {...configBtn} />}
          {posts.length > 0 && (
            <div>
              {posts.map((post, id) => {
                const { title, body } = post;
                const configPostItem = {
                  title,
                  desc: body
                };
                return <PostItem key={id} {...configPostItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};
export default connect(mapStateToProps, { readPosts })(App);
