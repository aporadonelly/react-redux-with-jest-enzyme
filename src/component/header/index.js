import React from 'react';
import './styles.scss';
import Logo from '../../asset/logo/logo.png';

const Header = () => {
  return (
    <div data-test='headerComponent'>
      <div data-test='wrap'>
        <img src={Logo} data-test='logoIMG' alt='logo' />
      </div>
    </div>
  );
};

export default Header;
