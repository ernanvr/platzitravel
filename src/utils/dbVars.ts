import { CardInfo, Picture } from '../types/global';
import norway from '../public/img/norway.jpg';
import newyork from '../public/img/new_york.jpg';
import yosemite from '../public/img/yosemite.jpg';
import chicago from '../public/img/chicago.jpg';
import la from '../public/img/LA.jpg';
import miami from '../public/img/miami.jpg';
import bali from '../public/img/bali.jpg';

export const cardInfoArray: CardInfo[] = [
  {
    index: 0,
    title: 'Norway',
    subtitle: 'Beautiful places',
    image: norway
  },
  {
    index: 0,
    title: 'New York',
    subtitle: 'Concrete jungle',
    image: newyork
  },
  {
    index: 0,
    title: 'Yosemite',
    subtitle: 'A break from the world',
    image: yosemite
  }
];

export const pictureInfoArray: Picture[] = [
  {
    title: 'Chicago',
    subtitle: '2 rooms, bathroom and kitchen',
    image: chicago
  },
  {
    title: 'Los Angeles',
    subtitle: '4 rooms, 3 bathrroms, kitchen and private pool.',
    image: la
  },
  {
    title: 'Miami',
    subtitle: '3 rooms, 2 bathrroms, kitchen and amazing sea view.',
    image: miami
  },
  {
    title: 'Bali',
    subtitle: '2 rooms, 2 bathrroms, kitchen and private pool.',
    image: bali
  }
];
