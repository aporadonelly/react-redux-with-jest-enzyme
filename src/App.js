import React from 'react';
import Header from './components/header';
import Headline from './components/headline';
import './app.scss';

const tempArr = [
  {
    fName: 'Joe',
    lName: 'Blogs',
    email: 'joeblog@gmail.com',
    age: 34,
    onlineStatus: true
  }
];
function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <Headline
          header={'Posts'}
          desc={'Click the button to render posts'}
          tempArr={tempArr}
        />
      </div>
    </div>
  );
}

export default App;
