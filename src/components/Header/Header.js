import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import imageResource from '../../resources/images';
import stringResource from '../../resources/strings';
import './Header.scss';

const Header = ({ refs }) => {
  const location = useLocation();

  useEffect(() => {
    console.log('location', location.pathname);
    switch (location.pathname) {
      case '/about':
        scrollSmoothHandler(refs.aboutRef);
        break;
      case '/contact':
        scrollSmoothHandler(refs.contactRef);
        break;
      case '/linkme':
        scrollSmoothHandler(refs.linkMeRef);
        break;
      case '/shop':
        scrollSmoothHandler(refs.shopRef);
        break;
      default:
        scrollSmoothHandler(refs.homeRef);
        break;
    }
  }, [location, refs]);

  const scrollSmoothHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='header'>
      <span className='header__logoContainer'>
        <a
          target='_blank'
          rel='noreferrer'
          href={stringResource.portfolio.website}
        >
          <img src={imageResource.music.bandlogo} alt='band logo'></img>
        </a>
      </span>
      <NavLink to='/about'>
        <strong>About</strong>
      </NavLink>
      <NavLink to='/shop'>
        <strong>Shop</strong>
      </NavLink>
      <NavLink to='/contact'>
        <strong>Contact</strong>
      </NavLink>
      <NavLink to='/linkme'>
        <strong>Links</strong>
      </NavLink>
    </div>
  );
};

export default Header;
