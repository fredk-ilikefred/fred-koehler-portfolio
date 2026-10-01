export interface BookItem {
  id: string
  title: string
  filename: string
  src: string
  width: number
  height: number
  aspectRatio: number
  role?: string
  category?: string
  year?: string
  publisher?: string
}

export interface PortfolioItem {
  id: string
  title: string
  filename: string
  src: string
  width: number
  height: number
  aspectRatio: number
}

export interface WipProject {
  id: string
  title: string
  category: string
  pitch: string
  readerfulUrl: string
  artSrc: string
  artWidth: number
  artHeight: number
  artAlt: string
  reverseLayout?: boolean
}

export const HERO_ASSET = {
  src: '/assets/header/header-v3b.jpg',
  sourceName: 'header-v3b.jpg',
  width: 1300,
  height: 354,
  integrity: 'Original Drive download; unaltered byte-for-byte asset.',
}

export const PUBLISHED_BOOKS: BookItem[] = [
  {
    id: 'garbage-island',
    title: 'Garbage Island',
    filename: 'garbage-island-cover.jpg',
    src: '/assets/book-covers/garbage-island-cover.jpg',
    width: 1791,
    height: 2550,
    aspectRatio: 1791 / 2550,
    role: 'Author & Illustrator',
    category: 'Middle Grade',
    year: '2019',
    publisher: 'Boyds Mills Press / Kane Miller',
  },
  {
    id: 'one-day-the-end',
    title: 'One Day, The End',
    filename: 'ODTE-COVER.jpg',
    src: '/assets/book-covers/ODTE-COVER.jpg',
    width: 2392,
    height: 2560,
    aspectRatio: 2392 / 2560,
    role: 'Illustrator',
    category: 'Picture Book',
    year: '2015',
    publisher: 'Peachtree Publishing',
  },
  {
    id: 'how-to-cheer-up-dad',
    title: 'How to Cheer Up Dad',
    filename: 'cover-6-21-16b.jpg',
    src: '/assets/book-covers/cover-6-21-16b.jpg',
    width: 600,
    height: 600,
    aspectRatio: 1,
    role: 'Author & Illustrator',
    category: 'Picture Book',
    year: '2014',
    publisher: 'Dial Books / Penguin Young Readers',
  },
  {
    id: 'super-jumbo',
    title: 'Super Jumbo',
    filename: 'super-jumbo-cover.jpg',
    src: '/assets/book-covers/super-jumbo-cover.jpg',
    width: 2000,
    height: 1991,
    aspectRatio: 2000 / 1991,
    role: 'Author & Illustrator',
    category: 'Picture Book',
    year: '2016',
    publisher: 'Dial Books / Penguin Young Readers',
  },
  {
    id: 'flashlight-night',
    title: 'Flashlight Night',
    filename: 'flashight-night.jpg',
    src: '/assets/book-covers/flashight-night.jpg',
    width: 1600,
    height: 1305,
    aspectRatio: 1600 / 1305,
    role: 'Illustrator',
    category: 'Picture Book',
    year: '2017',
    publisher: 'Boyds Mills Press',
  },
  {
    id: 'this-book-is-not-about-dragons',
    title: 'This Book Is NOT About Dragons',
    filename: 'not-about-dragons-cover.jpg',
    src: '/assets/book-covers/not-about-dragons-cover.jpg',
    width: 730,
    height: 659,
    aspectRatio: 730 / 659,
    role: 'Illustrator',
    category: 'Picture Book',
    year: '2017',
    publisher: 'Aladdin / Simon & Schuster',
  },
  {
    id: 'what-if-then-we',
    title: 'What If? Then We…',
    filename: 'whatif-cover.jpg',
    src: '/assets/book-covers/whatif-cover.jpg',
    width: 1500,
    height: 1513,
    aspectRatio: 1500 / 1513,
    role: 'Illustrator',
    category: 'Picture Book',
    year: '2018',
    publisher: 'Boyds Mills Press',
  },
  {
    id: 'puppy-and-piggy',
    title: 'Puppy and Piggy',
    filename: 'book-cover.jpg',
    src: '/assets/book-covers/book-cover.jpg',
    width: 2700,
    height: 2700,
    aspectRatio: 1,
    role: 'Illustrator',
    category: 'Early Reader / Picture Book',
    year: '2020',
  },
  {
    id: 'skunk-squad',
    title: 'Skunk Squad',
    filename: 'skunk-squad.jpg',
    src: '/assets/book-covers/skunk-squad.jpg',
    width: 1014,
    height: 1500,
    aspectRatio: 1014 / 1500,
    role: 'Author & Illustrator',
    category: 'Early Graphic Novel',
    year: '2021',
  },
  {
    id: 'undercover-iguana',
    title: 'Undercover Iguana',
    filename: 'undercover-iguana.jpg',
    src: '/assets/book-covers/undercover-iguana.jpg',
    width: 1014,
    height: 1500,
    aspectRatio: 1014 / 1500,
    role: 'Author & Illustrator',
    category: 'Middle Grade',
  },
]

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 'portfolio-01', title: 'Selected Artwork 01', filename: 'Untitled_Artwork-8.jpg', src: '/assets/portfolio/Untitled_Artwork-8.jpg', width: 1000, height: 1000, aspectRatio: 1 },
  { id: 'portfolio-02', title: 'Selected Artwork 02', filename: 'Untitled_Artwork-47.jpg', src: '/assets/portfolio/Untitled_Artwork-47.jpg', width: 750, height: 1000, aspectRatio: 0.75 },
  { id: 'portfolio-03', title: 'Unsinkable Study', filename: 'Unsinkable-1-v2.jpg', src: '/assets/portfolio/Unsinkable-1-v2.jpg', width: 1000, height: 1432, aspectRatio: 1000 / 1432 },
  { id: 'portfolio-04', title: 'Selected Artwork 04', filename: 'Untitled_Artwork-45.jpg', src: '/assets/portfolio/Untitled_Artwork-45.jpg', width: 1000, height: 750, aspectRatio: 1000 / 750 },
  { id: 'portfolio-05', title: 'Selected Artwork 05', filename: 'Untitled_Artwork-27.jpg', src: '/assets/portfolio/Untitled_Artwork-27.jpg', width: 1500, height: 969, aspectRatio: 1500 / 969 },
  { id: 'portfolio-06', title: 'Selected Artwork 06', filename: 'Untitled_Artwork-28.jpg', src: '/assets/portfolio/Untitled_Artwork-28.jpg', width: 1500, height: 664, aspectRatio: 1500 / 664 },
  { id: 'portfolio-07', title: 'Working Process Study', filename: 'working-2.jpg', src: '/assets/portfolio/working-2.jpg', width: 1500, height: 750, aspectRatio: 2 },
  { id: 'portfolio-08', title: 'Selected Artwork 08', filename: 'Untitled_Artwork-13.jpg', src: '/assets/portfolio/Untitled_Artwork-13.jpg', width: 1500, height: 667, aspectRatio: 1500 / 667 },
  { id: 'portfolio-09', title: 'Selected Artwork 09', filename: 'Untitled_Artwork-9.jpg', src: '/assets/portfolio/Untitled_Artwork-9.jpg', width: 1000, height: 985, aspectRatio: 1000 / 985 },
  { id: 'portfolio-10', title: 'Studio Drawing Sheet A', filename: 'SKM_C300i26051814030.jpg', src: '/assets/portfolio/SKM_C300i26051814030.jpg', width: 2932, height: 3090, aspectRatio: 2932 / 3090 },
  { id: 'portfolio-11', title: 'Studio Drawing Sheet B', filename: 'SKM_C300i26051814060.jpg', src: '/assets/portfolio/SKM_C300i26051814060.jpg', width: 1998, height: 3268, aspectRatio: 1998 / 3268 },
  { id: 'portfolio-12', title: 'Selected Artwork 12', filename: '9.jpg', src: '/assets/portfolio/9.jpg', width: 6475, height: 3325, aspectRatio: 6475 / 3325 },
  { id: 'portfolio-13', title: 'Selected Artwork 13', filename: '010.jpg', src: '/assets/portfolio/010.jpg', width: 5700, height: 2850, aspectRatio: 2 },
  { id: 'portfolio-14', title: 'Selected Artwork 14', filename: '7.jpg', src: '/assets/portfolio/7.jpg', width: 5550, height: 2850, aspectRatio: 5550 / 2850 },
  { id: 'portfolio-15', title: 'Selected Artwork 15', filename: '8.jpg', src: '/assets/portfolio/8.jpg', width: 6150, height: 2850, aspectRatio: 6150 / 2850 },
  { id: 'portfolio-16', title: 'Selected Artwork 16', filename: '2.jpg', src: '/assets/portfolio/2.jpg', width: 1000, height: 422, aspectRatio: 1000 / 422 },
  { id: 'portfolio-17', title: 'Selected Artwork 17', filename: '1.jpg', src: '/assets/portfolio/1.jpg', width: 1000, height: 422, aspectRatio: 1000 / 422 },
  { id: 'portfolio-18', title: 'Selected Artwork 18', filename: '4.jpg', src: '/assets/portfolio/4.jpg', width: 2500, height: 1250, aspectRatio: 2 },
  { id: 'portfolio-19', title: 'Selected Artwork 19', filename: '5.jpg', src: '/assets/portfolio/5.jpg', width: 2500, height: 1250, aspectRatio: 2 },
  { id: 'portfolio-20', title: 'Selected Artwork 20', filename: '6.jpg', src: '/assets/portfolio/6.jpg', width: 2500, height: 1250, aspectRatio: 2 },
  { id: 'portfolio-21', title: 'Selected Artwork 21', filename: '3.jpg', src: '/assets/portfolio/3.jpg', width: 2500, height: 1250, aspectRatio: 2 },
]

export const WIP_PROJECTS: WipProject[] = [
  {
    id: 'the-faerie-godfather',
    title: 'The Faerie Godfather',
    category: 'Middle Grade Adventure · Illustrated Fiction',
    pitch:
      'Miriam Lockhart never believed in faeries—until they killed her. Now trapped in the faerie realm as a wandering spirit (and none too happy about it), Miriam must discover her unfinished business or remain a ghost forever.',
    readerfulUrl: 'https://readerful.com/story/the-faerie-godfather-UgAjuYBT',
    artSrc: '/assets/wip/the-faerie-godfather.jpg',
    artWidth: 1000,
    artHeight: 292,
    artAlt: 'Original panoramic artwork for The Faerie Godfather by Fred Koehler',
    reverseLayout: false,
  },
  {
    id: 'the-unsinkable',
    title: 'The Unsinkable',
    category: 'Middle Grade Adventure · Illustrated Fiction',
    pitch:
      "To keep his family afloat, a fisherman's son takes out his father's boat and gets lost in the Gulf of Mexico.",
    readerfulUrl: 'https://readerful.com/story/the-unsinkable-7GZj0kC3',
    artSrc: '/assets/wip/the-unsinkable.jpg',
    artWidth: 1000,
    artHeight: 317,
    artAlt: 'Original comic spread artwork for The Unsinkable by Fred Koehler',
    reverseLayout: true,
  },
]

// Backward-compatible alias for any in-flight HMR client requests
export const WIP_ITEMS = WIP_PROJECTS
