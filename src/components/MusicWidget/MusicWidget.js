import React from 'react';
import Promotion from '../Promotion/Promotion';
import './MusicWidget.scss';

export default function MusicWidget() {
  return (
    <div className={'musicWidget'}>
      <div className={'musicWidget__item'}>
        <Promotion />
      </div>
    </div>
  );
}
