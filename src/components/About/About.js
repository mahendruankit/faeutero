import React, { forwardRef } from 'react';
import imageResource from '../../resources/images';
import LatestVideo from '../LatestVideo/LatestVideo';
import Emoji from '../../components/Emoji/Emoji';
import './About.scss';

const About = forwardRef((props, ref) => {
  return (
    <section className='aboutSection' ref={ref}>
      <div className='aboutSection__container'>
        <div className='aboutSection__avatar'>
          <img
            src={imageResource.portfolio.contactMe.avatar}
            alt='Graduation'
            className='aboutSection__avatar__image'
          ></img>
        </div>
        <div className='aboutSection__introduction'>
          <div className='spacer'></div>
          <h3> It's all in the music</h3>
          <p className='aboutSection__introduction__message'>
            <i>
              Generic rock with a twist of introspect & delusion but mostly
              cringe <Emoji label='Pinched Fingers' symbol='🤌' />{' '}
            </i>
          </p>
          <div className='spacer-large'></div>
          <LatestVideo />
        </div>
      </div>
    </section>
  );
});

export default About;
