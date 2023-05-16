import React from 'react';
import stringResource from '../../resources/strings';
import imageResource from '../../resources/images';
import './Promotion.scss';

export default function Promotion() {
  return (
    <div className='promotion'>
      {
        <div className='promotion__highlight'>
          <a
            className='promotion__highlight__link'
            target='_blank'
            rel='noreferrer'
            href={stringResource.portfolio.alivesingle}
          >
            <img
              src={imageResource.product.alive}
              alt='Graduation'
              className='promotion__highlight__image'
            ></img>
          </a>
        </div>
      }
    </div>
  );
}
