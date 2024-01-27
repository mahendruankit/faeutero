import React from 'react';
import {
  FaYoutube,
  FaBandcamp,
  FaApple,
  FaSpotify,
  FaInstagram,
} from 'react-icons/fa';
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
          href={stringResource.portfolio.social.applemusic}
          target='_blank'
          rel='noreferrer'
        >
          <FaApple />
        </a>
      </div>
      <div className='social__item'>
        <a
          href={stringResource.portfolio.social.spotify}
          target='_blank'
          rel='noreferrer'
        >
          <FaSpotify />
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
      <div className='social__item'>
        <a
          href={stringResource.portfolio.social.instagram}
          target='_blank'
          rel='noreferrer'
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
