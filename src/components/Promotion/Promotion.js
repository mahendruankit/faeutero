import React from 'react';
import stringResource from '../../resources/strings';
import imageResource from '../../resources/images';
import './Promotion.scss';

export default function Promotion() {
  return (
    <div className='promotion'>
      {
        <a
          className='promotion__link'
          target='_blank'
          rel='noreferrer'
          href={stringResource.portfolio.hobyoutubeplaylist}
        >
          <img
            src={imageResource.product.hob}
            alt='hill of beans album'
            className='promotion__image'
          ></img>
        </a>
      }
    </div>
  );
}
