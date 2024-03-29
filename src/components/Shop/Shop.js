import React, { forwardRef } from 'react';
import stringResource from '../../resources/strings';
import imageResource from '../../resources/images';
import Social from '../Social/Social';
import Emoji from '../Emoji/Emoji';

import './Shop.scss';

const Shop = forwardRef((props, ref) => {
  return (
    <section className='shop' ref={ref}>
      <div className='shop__buy'>
        <a
          target='_blank'
          rel='noreferrer'
          href={stringResource.portfolio.bandcampURL}
        >
          BUY NOW&nbsp;
          <Emoji label='headphones' symbol='🎧' />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href={stringResource.portfolio.hobmerch}
        >
          BUY MERCH&nbsp;
          <Emoji label='skull' symbol='💀' />
        </a>
      </div>

      <Social className='shop' />
      <div className='shop__merch'>
        <a
          target='_blank'
          rel='noreferrer'
          href={stringResource.portfolio.hobmerch}
        >
          <img
            className='shop__merch__img'
            src={imageResource.merch.merch_h}
            alt='merch hoodie'
          ></img>
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href={stringResource.portfolio.hobmerch}
        >
          <img
            className='shop__merch__img'
            src={imageResource.merch.merch_t}
            alt='merch t'
          ></img>
        </a>
      </div>
    </section>
  );
});

export default Shop;
