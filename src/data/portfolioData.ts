export interface AssetDimension {
  width: number
  height: number
  format: string
}

export interface ManifestAsset {
  id: string
  sourceName: string
  localPath: string
  section: 'hero' | 'books' | 'portfolio'
  displayTitle: string
  byteSize: number
  sha256: string
  dimensions: AssetDimension
  integrity: string
}

export interface BookItem {
  id: string
  title: string
  filename: string
  src: string
  width: number
  height: number
  aspectRatio: number
  role: string
  category: 'Picture Book' | 'Middle Grade' | 'Illustrated Novel'
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

export interface WipItem {
  id: string
  title: string
  category: string
  pitch: string
  artOrientation: 'left' | 'right'
  status: string
  placeholderType: 'sketch-spread' | 'middle-grade' | 'fantasy-adventure' | 'character-sheet'
}

export const HERO_ASSET = {
  src: '/assets/header/header-v1.jpg',
  sourceName: 'header-v1.jpg',
  width: 1400,
  height: 372,
  integrity: 'Original Drive download; unaltered byte-for-byte asset.',
}

export const PUBLISHED_BOOKS: BookItem[] = [
  {
    id: 'garbage-island',
    title: 'Garbage Island',
    filename: 'garbage-island-cover.jpg',
    src: '/assets/book-covers/garbage-island-cover.jpg',
    width: 600,
    height: 924,
    aspectRatio: 600 / 924,
    role: 'Author & Illustrator',
    category: 'Middle Grade',
    year: '2019',
    publisher: 'Mixtape Press / Boyds Mills & Kane',
  },
  {
    id: 'one-day-the-end',
    title: 'One Day, The End',
    filename: 'ODTE-COVER.jpg',
    src: '/assets/book-covers/ODTE-COVER.jpg',
    width: 800,
    height: 800,
    aspectRatio: 1,
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
    width: 800,
    height: 792,
    aspectRatio: 800 / 792,
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
    width: 800,
    height: 796,
    aspectRatio: 800 / 796,
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
    width: 900,
    height: 1045,
    aspectRatio: 900 / 1045,
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
    width: 600,
    height: 735,
    aspectRatio: 600 / 735,
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
    width: 600,
    height: 600,
    aspectRatio: 1,
    role: 'Illustrator',
    category: 'Picture Book',
    year: '2020',
    publisher: 'Peachtree Publishing',
  },
  {
    id: 'puppy-puppy-puppy',
    title: 'Puppy, Puppy, Puppy',
    filename: 'book-cover.jpg',
    src: '/assets/book-covers/book-cover.jpg',
    width: 1000,
    height: 1000,
    aspectRatio: 1,
    role: 'Illustrator',
    category: 'Picture Book',
    year: '2018',
    publisher: 'Boyds Mills Press',
  },
  {
    id: 'skunk-squad',
    title: 'Skunk Squad',
    filename: 'skunk-squad.jpg',
    src: '/assets/book-covers/skunk-squad.jpg',
    width: 648,
    height: 948,
    aspectRatio: 648 / 948,
    role: 'Author & Illustrator',
    category: 'Middle Grade',
  },
  {
    id: 'undercover-iguana',
    title: 'Undercover Iguana',
    filename: 'undercover-iguana.jpg',
    src: '/assets/book-covers/undercover-iguana.jpg',
    width: 648,
    height: 948,
    aspectRatio: 648 / 948,
    role: 'Author & Illustrator',
    category: 'Middle Grade',
  },
]

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 'portfolio-01', title: 'Selected Work 01', filename: 'Untitled_Artwork-8.jpg', src: '/assets/portfolio/Untitled_Artwork-8.jpg', width: 1400, height: 955, aspectRatio: 1400 / 955 },
  { id: 'portfolio-02', title: 'Selected Work 02', filename: 'Untitled_Artwork-47.jpg', src: '/assets/portfolio/Untitled_Artwork-47.jpg', width: 1400, height: 955, aspectRatio: 1400 / 955 },
  { id: 'portfolio-03', title: 'Unsinkable Study', filename: 'Unsinkable-1-v2.jpg', src: '/assets/portfolio/Unsinkable-1-v2.jpg', width: 1400, height: 955, aspectRatio: 1400 / 955 },
  { id: 'portfolio-04', title: 'Selected Work 04', filename: 'Untitled_Artwork-45.jpg', src: '/assets/portfolio/Untitled_Artwork-45.jpg', width: 1400, height: 955, aspectRatio: 1400 / 955 },
  { id: 'portfolio-05', title: 'Selected Work 05', filename: 'Untitled_Artwork-27.jpg', src: '/assets/portfolio/Untitled_Artwork-27.jpg', width: 1400, height: 955, aspectRatio: 1400 / 955 },
  { id: 'portfolio-06', title: 'Selected Work 06', filename: 'Untitled_Artwork-28.jpg', src: '/assets/portfolio/Untitled_Artwork-28.jpg', width: 1400, height: 955, aspectRatio: 1400 / 955 },
  { id: 'portfolio-07', title: 'Working Process Study', filename: 'working-2.jpg', src: '/assets/portfolio/working-2.jpg', width: 1400, height: 955, aspectRatio: 1400 / 955 },
  { id: 'portfolio-08', title: 'Selected Work 08', filename: 'Untitled_Artwork-13.jpg', src: '/assets/portfolio/Untitled_Artwork-13.jpg', width: 1400, height: 955, aspectRatio: 1400 / 955 },
  { id: 'portfolio-09', title: 'Selected Work 09', filename: 'Untitled_Artwork-9.jpg', src: '/assets/portfolio/Untitled_Artwork-9.jpg', width: 1400, height: 955, aspectRatio: 1400 / 955 },
  { id: 'portfolio-10', title: 'Studio Drawing Sheet A', filename: 'SKM_C300i26051814030.jpg', src: '/assets/portfolio/SKM_C300i26051814030.jpg', width: 1754, height: 1240, aspectRatio: 1754 / 1240 },
  { id: 'portfolio-11', title: 'Studio Drawing Sheet B', filename: 'SKM_C300i26051814060.jpg', src: '/assets/portfolio/SKM_C300i26051814060.jpg', width: 1754, height: 1240, aspectRatio: 1754 / 1240 },
  { id: 'portfolio-12', title: 'Selected Illustration 12', filename: '9.jpg', src: '/assets/portfolio/9.jpg', width: 3300, height: 2550, aspectRatio: 3300 / 2550 },
  { id: 'portfolio-13', title: 'Selected Illustration 13', filename: '010.jpg', src: '/assets/portfolio/010.jpg', width: 3300, height: 2550, aspectRatio: 3300 / 2550 },
  { id: 'portfolio-14', title: 'Selected Illustration 14', filename: '7.jpg', src: '/assets/portfolio/7.jpg', width: 3300, height: 2550, aspectRatio: 3300 / 2550 },
  { id: 'portfolio-15', title: 'Selected Illustration 15', filename: '8.jpg', src: '/assets/portfolio/8.jpg', width: 3300, height: 2550, aspectRatio: 3300 / 2550 },
  { id: 'portfolio-16', title: 'Selected Story Spread 16', filename: '2.jpg', src: '/assets/portfolio/2.jpg', width: 1200, height: 927, aspectRatio: 1200 / 927 },
  { id: 'portfolio-17', title: 'Selected Story Spread 17', filename: '1.jpg', src: '/assets/portfolio/1.jpg', width: 1200, height: 927, aspectRatio: 1200 / 927 },
  { id: 'portfolio-18', title: 'Selected Story Spread 18', filename: '4.jpg', src: '/assets/portfolio/4.jpg', width: 2000, height: 1545, aspectRatio: 2000 / 1545 },
  { id: 'portfolio-19', title: 'Selected Story Spread 19', filename: '5.jpg', src: '/assets/portfolio/5.jpg', width: 2400, height: 1854, aspectRatio: 2400 / 1854 },
  { id: 'portfolio-20', title: 'Selected Story Spread 20', filename: '6.jpg', src: '/assets/portfolio/6.jpg', width: 2000, height: 1545, aspectRatio: 2000 / 1545 },
  { id: 'portfolio-21', title: 'Selected Story Spread 21', filename: '3.jpg', src: '/assets/portfolio/3.jpg', width: 2400, height: 1854, aspectRatio: 2400 / 1854 },
]

export const WIP_ITEMS: WipItem[] = [
  {
    id: 'mythic-airlines',
    title: 'Mythic Airlines',
    category: 'Middle Grade Adventure · Illustrated Fiction',
    pitch: 'Where legendary creatures run the skies and every flight is an expedition into unknown airspace. An unexpected and thrilling exploration of human and fantasy figures from a middle-grade perspective.',
    artOrientation: 'left',
    status: 'Rights Available',
    placeholderType: 'sketch-spread',
  },
  {
    id: 'wip-picture-book',
    title: 'New Picture Book Project',
    category: 'Picture Book · Ages 4–8',
    pitch: 'A heartwarming story about oversized friendships, small acts of bravery, and finding your way home across an impossible landscape. Ready for book-dummy review.',
    artOrientation: 'right',
    status: 'Rights Available',
    placeholderType: 'fantasy-adventure',
  },
  {
    id: 'wip-middle-grade',
    title: 'New Middle Grade Adventure',
    category: 'Middle Grade · Ages 8–12',
    pitch: 'Brave kids, ancient maps, and a quest that could change everything. Built for readers who love fast-moving humor, sea spray, and high-stakes teamwork.',
    artOrientation: 'left',
    status: 'Rights Available',
    placeholderType: 'middle-grade',
  },
  {
    id: 'character-world',
    title: 'Character World & Concept Sheets',
    category: 'Visual Development · Character Series',
    pitch: 'A cast of curious, expressive characters developed for licensing, graphic novels, and upcoming manuscripts. Model sheets, expression grids, and thumbnail stories.',
    artOrientation: 'right',
    status: 'Rights Available',
    placeholderType: 'character-sheet',
  },
]
