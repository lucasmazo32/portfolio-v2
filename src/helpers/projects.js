import dilution from '../assets/images/projects/dilution.png';
import hmmm from '../assets/images/projects/hmmm.png';
import jlt from '../assets/images/projects/jlt.jpeg';
import march from '../assets/images/projects/march.png';
import otp from '../assets/images/projects/otp.png';

export default [
  {
    image: dilution,
    portrait: true,
    title: 'Dilution',
    desc: '"Dilution" is a project designed and created by me, using UI and UX principles. It is a web application, and even though it works on all devices, it is designed exclusively for mobile. The page works using Spotify API, and it intends to help you find different songs that you may like.',
    builtWith: [
      'React',
      'Redux',
      'Sass',
    ],
    refs: [
      'https://5ef4bb1bce77554c957b455b--dilution.netlify.app/',
      'https://github.com/lucasmazo32/dilution',
    ],
  },
  {
    image: hmmm,
    portrait: false,
    title: 'Hmmm',
    desc: '‘Hmmm - we help you decide’ is a full-stack project, using Rails as the backend and React-Redux as the front-end. The webpage helps clients selling tours with users. You will have all the information available regarding each trip and book them for a specific date.',
    builtWith: [
      'React',
      'Redux',
      'Sass',
      'Rails',
    ],
    refs: [
      'https://5edaa2d5b186b616885a172d--hmmm-app.netlify.app/',
      'https://github.com/lucasmazo32/hmmm',
    ],
  },
  {
    image: jlt,
    portrait: false,
    title: 'Just Like That',
    desc: '"Just Like That" is a desktop web application created to mimic some features from Twitter, like creating tweets, tagging users on those tweets, and following and unfollowing users. I deployed this application on Heroku.',
    builtWith: [
      'Rails',
      'Sass',
    ],
    refs: [
      'https://immense-castle-68670.herokuapp.com/',
      'https://github.com/lucasmazo32/just-like-that',
    ],
  },
  {
    image: march,
    portrait: false,
    title: 'March Game',
    desc: '"March - The game" is a desktop game created using JavaScript and Phaser. March is a level-based game (ten levels) in which you will have to overcome obstacles and finish as fast as possible. You can see the scoreboard and beat other people\'s scores.',
    builtWith: [
      'JavaScript',
    ],
    refs: [
      'https://lucasmazo32.github.io/march-game/',
      'https://github.com/lucasmazo32/march-game',
    ],
  },
  {
    image: otp,
    portrait: false,
    title: 'OneTrick Pony',
    desc: '"OneTrick Pony" is a React-Redux project based on a movie catalog using an API to retrieve the information. On the webpage, you can select movies from ten pre-selected ones or choose any film you like by looking for them on the searcher. Add all the shows you like to your favorites and look at them any time you want. Clicking in the movie image will show you more information.',
    builtWith: [
      'React',
      'Redux',
      'Sass',
    ],
    refs: [
      'https://5ec6d65e060eac840e83bba6--naughty-euler-862f81.netlify.app/',
      'https://github.com/lucasmazo32/otp',
    ],
  },
];
