import React, { forwardRef } from 'react';
import stringResource from '../../resources/strings';
import Social from '../Social/Social';

import './Shop.scss';

const Shop = forwardRef((props, ref) => {
  return (
    <section className='shop' ref={ref}>
      <a
        target='_blank'
        rel='noreferrer'
        href={stringResource.portfolio.hillofbeansbandcamplink}
      >
        <strong>BUY HERE</strong>
      </a>
      <Social className='shop' />
    </section>
  );
});

export default Shop;
