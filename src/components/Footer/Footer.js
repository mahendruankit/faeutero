import React from 'react';
import stringResource from '../../resources/strings';
import Social from '../Social/Social';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__logo'>
        <img src={process.env.PUBLIC_URL + '/logo512.png'} alt=''></img>
      </div>
      <ul className='footer__details'>
        <li className='footer__details__item'></li>
        <li className='footer__details__item'></li>
        <hr />
        <li className='footer__details__item'>
          &copy;{new Date().getFullYear()} |{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href={stringResource.portfolio.developerwebsite}
          >
            {stringResource.portfolio.developer}
          </a>{' '}
          | All rights reserved
        </li>
      </ul>
      <Social />
    </div>
  );
};

export default Footer;
