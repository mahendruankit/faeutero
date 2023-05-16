import React from 'react';
import SpotifyPlayer from 'react-spotify-player';
import stringResource from '../../resources/strings';
import './Spotify.scss';

export default function Spotify() {
  // size may also be a plain string using the presets 'large' or 'compact'
  const size = {
    width: '100%',
    height: 300,
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'
  return (
    <div className='spotify'>
      <div className='spotify__title'>
        <strong>
          <a
            className='spotify__title-link'
            target='_blank'
            rel='noreferrer'
            href={stringResource.portfolio.social.spotify}
          >
            LISTEN NOW!
          </a>
        </strong>
      </div>
      <SpotifyPlayer
        uri='https://open.spotify.com/artist/2jgvsnDdf6qCve1pikbDqh?si=GANWA2N9SoyLXV9Q5CR_Yg'
        size={size}
        view={view}
        theme={theme}
      />
    </div>
  );
}
