import React, { forwardRef } from 'react';
import imageResource from '../../resources/images';
import LatestVideo from '../LatestVideo/LatestVideo';
import YouTubeSubscribe from '../YoutubeSubscribe/YoutubeSubscribe';
import './About.scss';

const About = forwardRef((props, ref) => {
  return (
    <section className='aboutSection' ref={ref}>
      <div className='aboutSection__container'>
        <div className='aboutSection__introduction'>
          <YouTubeSubscribe
            theme={'default'}
            layout={'full'}
            count={'default'}
          />
          <LatestVideo />
        </div>
        <div className='aboutSection__introduction'>
          <h3>
            <strong>
              <i>It's all in the music</i>
            </strong>
          </h3>
          <h3>
            <strong>and the rave reviews are in...</strong>
          </h3>
          <img
            src={imageResource.home.emotionalcringe}
            alt='avatar'
            className='aboutSection__avatar__image'
          ></img>
        </div>
      </div>
    </section>
  );
});

export default About;
