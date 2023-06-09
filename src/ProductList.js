import imagesResource from './resources/images';
import stringResource from './resources/strings';

export default [
  {
    id: 1,
    title: 'hill of beans',
    description: 'digital album',
    image: imagesResource.product.hob,
    price: 4,
    category: 'music',
    ispostingincluded: false,
    url: stringResource.portfolio.hillofbeansyoutubelink,
  },
  {
    id: 2,
    title: 'lonely together',
    description: 'single',
    image: imagesResource.product.lt,
    price: 0.99,
    category: 'music',
    ispostingincluded: false,
    url: stringResource.portfolio.youtubelinkltsingle,
  },
  {
    id: 3,
    title: 'hate wing',
    description: 'single',
    image: imagesResource.product.hw,
    price: 0.99,
    category: 'music',
    ispostingincluded: false,
    url: stringResource.portfolio.youtubelinkhwsingle,
  },
  {
    id: 4,
    title: 'introspect',
    description: 'single',
    image: imagesResource.product.introspect,
    price: 0.99,
    category: 'music',
    ispostingincluded: false,
    url: stringResource.portfolio.introspectsingle,
  },
].reverse();
