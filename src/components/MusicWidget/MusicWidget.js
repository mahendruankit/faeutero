import React from 'react';
import Spotify from '../Spotify/Spotify';
import './MusicWidget.scss';

export default function MusicWidget() {
  return (
    <div className={'musicWidget'}>
      <div className={'musicWidget__item'}>
        <Spotify />
      </div>
    </div>
  );
}
