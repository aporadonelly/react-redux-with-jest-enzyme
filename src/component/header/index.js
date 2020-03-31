import React from 'react';
import './styles.scss';
import Logo from '../../asset/logo/logo.png';

const Header = () => {
  return (
    <div>
      <div className='wrap'>
        <img src={Logo} className='logo' />
      </div>
    </div>
  );
};

export default Header;
