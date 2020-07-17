export default {
  1: {
    q: 'What type of developer are you looking for?',
    op: ['Front end', 'Back end', 'Full stack'],
    ans: {
      'Front end': {
        text: 'Great. My passion is Front end development.',
        now: 'next',
      },
      'Back end': {
        text: 'My passion is Front end development, so I am not the person you are looking for.',
        now: 'stop',
      },
      'Full stack': {
        text: 'My passion is Front end development, but I also love Back end development. I can work as Full Stack.',
        now: 'next',
      },
    },
  },
  2: {
    q: 'What technologies are you looking for?',
    mcfront: ['React / Redux', 'Angular', 'Vue', 'Bootstrap', 'CSS', 'Sass', 'JavaScript'],
    mcback: ['Ruby on Rails', 'C++', 'C#', 'Java', 'PHP', 'Go', 'Rust', 'Express', 'Django'],
    mcql: ['SQL', 'NoSQL'],
  },
};
