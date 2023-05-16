import imagesResource from './resources/images';
import stringResource from './resources/strings';

export default [
  {
    id: 1,
    title: 'hill of beans',
    image: imagesResource.promotion.hobwithout,
    url: stringResource.portfolio.hillofbeansbandcamplink,
  },
  {
    id: 2,
    title: 'lonely together',
    image: imagesResource.promotion.ltwithout,
    url: stringResource.portfolio.youtubelinkltsingle,
  },
  {
    id: 3,
    title: 'hate wing',
    image: imagesResource.promotion.hwwithout,
    url: stringResource.portfolio.youtubelinkhwsingle,
  },
  {
    id: 4,
    title: 'introspect',
    image: imagesResource.promotion.introspectwithout,
    url: stringResource.portfolio.introspectsingle,
  },
  {
    id: 5,
    title: 'alive',
    image: imagesResource.promotion.alive,
    url: stringResource.portfolio.alivesingle,
  },
].reverse();
