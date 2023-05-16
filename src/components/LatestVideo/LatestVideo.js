import React from 'react';
import listOfVideos from '../../VideosList';
import YouTubeSubscribe from '../YoutubeSubscribe/YoutubeSubscribe';
import './LatestVideo.scss';

export default function LatestVideo() {
  return (
    <div className='latestVideo'>
      <div className='latestVideo__youtube'>
        <YouTubeSubscribe theme={'default'} layout={'full'} count={'default'} />
      </div>
      <div className='latestVideo__video'>
        <iframe
          src={listOfVideos[0].url}
          title={listOfVideos[0].title}
          allowFullScreen
          frameBorder='0'
        />
      </div>
    </div>
  );
}
