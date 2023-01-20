import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../../images/Logo.svg'; 
import { routerPath, header } from '../../constants';
import { Navigation } from '../Navigation';

export function Header({ loggedIn }) {



  return (
    <div className='header'>
      <Link 
        className='header__link'
        to={routerPath.main}
        aria-label={header.ariaLabel}
      >
        <img 
          className='header__logo' 
          src={logo} 
          alt={header.logoAlt} />
      </Link>
      <Navigation loggedIn={loggedIn} />
    </div>
  );
};
