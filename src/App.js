import React, { Component } from 'react';
import './app.scss';
import Header from './component/header';
import Headline from './component/headline';

const tempArr = [
  {
    fName: 'Nelly',
    lName: 'Test',
    email: 'nelly@gmail.com',
    age: 100,
    onlineStatus: true
  }
];
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <section className='main'>
          <Headline header='Posts' desc='Click me' tempArr={tempArr} />
        </section>
      </div>
    );
  }
}

export default App;
