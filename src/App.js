import React, { Component } from 'react';
import './app.scss';
import Header from './component/header';
import Headline from './component/headline';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <section className='main'>
          <Headline header='Posts' desc='Click me' />
        </section>
      </div>
    );
  }
}

export default App;
