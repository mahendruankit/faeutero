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
          <h2>
            <strong>
              <i>It's all in the music</i>
            </strong>
          </h2>
          <h3>
            <strong>
              and the <i>rave</i> reviews are in...
            </strong>
          </h3>
          <img
            src={imageResource.home.emotionalcringe}
            alt='avatar'
            className='aboutSection__avatar__image'
          ></img>
        </div>
      </div>
      <h1>HILL OF BEANS</h1>
      <div className='aboutSection__quote'>
        <p>something of negligible importance or value</p>
      </div>
    </section>
  );
});

export default About;
