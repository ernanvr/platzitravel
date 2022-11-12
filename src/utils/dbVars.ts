import { CardDetails, Picture } from '../types/global'
import norway from '../public/img/norway.jpg'
import newyork from '../public/img/new_york.jpg'
import yosemite from '../public/img/yosemite.jpg'
import chicago from '../public/img/chicago.jpg'
import la from '../public/img/LA.jpg'
import miami from '../public/img/miami.jpg'
import bali from '../public/img/bali.jpg'
import sidney from '../public/img/sydney.jpg'
import switzerland from '../public/img/switzerland.jpg'

export const cardInfoArray: CardDetails[] = [
  {
    index: 0,
    title: 'Norway',
    subtitle: 'Beautiful places',
    image: norway
  },
  {
    index: 1,
    title: 'New York',
    subtitle: 'Concrete jungle',
    image: newyork
  },
  {
    index: 2,
    title: 'Yosemite',
    subtitle: 'A break from the world',
    image: yosemite
  },
  {
    index: 3,
    title: 'Sidney',
    subtitle: 'Big city',
    image: sidney
  },
  {
    index: 4,
    title: 'Switzerland',
    subtitle: 'Big and beautiful country',
    image: switzerland
  }
]

export const pictureInfoArray: Picture[] = [
  {
    index: 0,
    title: 'Chicago',
    subtitle: '2 rooms, bathroom and kitchen',
    image: chicago
  },
  {
    index: 1,
    title: 'Los Angeles',
    subtitle: '4 rooms, 3 bathrroms, kitchen and private pool.',
    image: la
  },
  {
    index: 2,
    title: 'Miami',
    subtitle: '3 rooms, 2 bathrroms, kitchen and amazing sea view.',
    image: miami
  },
  {
    index: 3,
    title: 'Bali',
    subtitle: '2 rooms, 2 bathrroms, kitchen and private pool.',
    image: bali
  }
]
