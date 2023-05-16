import imageResource from './resources/images';
import stringResource from './resources/strings';

const latestLinks = [
  {
    id: 1,
    title: 'hill of beans',
    url: stringResource.portfolio.hillofbeansyoutubelink,
    source: imageResource.music.youtube,
  },
  {
    id: 2,
    title: 'hate wing',
    url: 'https://youtu.be/ll0AXsmF1-k',
    source: imageResource.music.youtube,
  },
  {
    id: 3,
    title: 'lonely together',
    url: 'https://youtu.be/dPy0OyQblco',
    source: imageResource.music.youtube,
  },
  {
    id: 4,
    title: 'introspect',
    url: 'https://youtu.be/FH43bDMRG9s',
    source: imageResource.music.youtube,
  },
  {
    id: 5,
    title: 'alive',
    url: stringResource.portfolio.alivesingle,
    source: imageResource.music.youtube,
  },
].reverse();

export default latestLinks;
