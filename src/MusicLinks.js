import imageResource from './resources/images';
import stringResource from './resources/strings';
const musicLinks = [
  {
    id: 1,
    title: 'Spotify',
    url: stringResource.portfolio.social.spotify,
    source: imageResource.music.spotifylogo,
  },
  {
    id: 2,
    title: 'Apple Music',
    url: stringResource.portfolio.social.applemusic,
    source: imageResource.music.appleMusic,
  },
  {
    id: 3,
    title: 'Youtube',
    url: 'https://www.youtube.com/channel/UCg2zJzFO0yrYL7YZ1aHXxkg',
    source: imageResource.music.youtube,
  },
  {
    id: 4,
    title: 'Bandcamp',
    url: 'https://fae-utero.bandcamp.com/',
    source: imageResource.music.bandcamp,
  },
];

export default musicLinks;
