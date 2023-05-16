import React, { forwardRef } from 'react';
import LinkMeContainer from './LinkeMeContainer/LinkMeContainer';
import musicLinks from '../../MusicLinks';
import socialLinks from '../../SocialLinks';
import './LinkMe.scss';

const LinkMe = forwardRef((props, ref) => {
  return (
    <section className='linkMe' ref={ref}>
      <ul className='linkMe__items'>
        <h1>MUSIC</h1>
        {musicLinks.map((link, key) => {
          return <LinkMeContainer link={link} key={key} />;
        })}

        <h1>SOCIAL</h1>
        {socialLinks.map((link, key) => {
          return <LinkMeContainer link={link} key={key} />;
        })}
      </ul>
    </section>
  );
});

export default LinkMe;
