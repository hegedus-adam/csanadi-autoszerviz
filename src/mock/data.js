import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Csanádi Autószerviz',
  lang: 'hu',
  description: 'Csanádi Autószerviz - Eger, Régi Cifrakapu u. 64/A, 3300',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Csanádi Autószerviz',
  subtitle: 'Márkafüggetlen személy- és kistehergépjármű szerviz Egerben.',
  cta: 'Tudjon meg többet!',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Márkafüggetlen személy- és kistehergépjármű szerviz Egerben.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Olajcsere',
    info:
      'Az olajcserét érdemes kb. 10 000 kilométerenként, de legalább évente elvégezni azért, hogy az hatékonyan és megbízhatóan működjön.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Futóműbeállítás',
    info:
      'A rendszeres és szakszerű futóműbeállítás célja biztosítani a gumiabroncsok megfelelő úttartását és élettartamának növelését.',
    info2:
      'A futóműbeállítás során ellenőrizzük a kerekek irányát és szögét a gépjármű gyártója által meghatározott értékekhez képest. Korrigáljuk az kerékösszetartást - széttartást, illetve a pozitív és negatív kerékdőlést, hogy a gépjármű biztonságosan és gazdaságosan közlekedhessen.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Műszaki vizsgáztatás',
    info: 'Vállaljuk autójának műszaki vizsgára való felkészítését és ügyintézését.',
    info2:
      'Az átvizsgálás során feltárt javítást igénylő hibákról, hiányosságokról tájékoztatjuk és elvégezzük a szükséges javításokat. A járművet ezután egy kijelölt vizsgaállomáson vizsgáztatjuk le.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
