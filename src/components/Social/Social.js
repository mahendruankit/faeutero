import React from 'react';
import { FaYoutube, FaBandcamp } from 'react-icons/fa';
import stringResource from '../../resources/strings';
import './Social.scss';

export default function Social({ className }) {
  return (
    <div className={`${className} social`}>
      <div className='social__item'>
        <a
          href={stringResource.portfolio.social.youtube}
          target='_blank'
          rel='noreferrer'
        >
          <FaYoutube />
        </a>
      </div>
      <div className='social__item'>
        <a
          href={stringResource.portfolio.social.bandcamp}
          target='_blank'
          rel='noreferrer'
        >
          <FaBandcamp />
        </a>
      </div>
    </div>
  );
}
