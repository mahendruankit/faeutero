import React from 'react';
import SpotifyPlayer from 'react-spotify-player';
import stringResource from '../../resources/strings';
import './Spotify.scss';

export default function Spotify() {
  // size may also be a plain string using the presets 'large' or 'compact'
  const size = {
    width: '70%',
    height: '500',
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'
  return (
    <div className='spotify'>
      <SpotifyPlayer
        uri={stringResource.portfolio.spotifyartistlink}
        size={size}
        view={view}
        theme={theme}
      />
    </div>
  );
}
