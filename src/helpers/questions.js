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
    mcfront: ['React', 'Redux', 'Angular', 'Vue', 'Bootstrap', 'CSS', 'Sass', 'JavaScript', 'Other'],
    mcback: ['Ruby on Rails', 'C++', 'C#', 'Java', 'PHP', 'Go', 'Rust', 'Express', 'Django', 'Other'],
    mcql: ['SQL', 'NoSQL'],
    check: ['React', 'Redux', 'Bootstrap', 'CSS', 'Sass', 'JavaScript', 'Ruby on Rails', 'SQL'],
    ans: [
      'Perfect. I know all the technologies you are looking for!',
      "I don't know all the technologies, but I am eager to learn them if you are willing to invest in me.",
    ],
  },
  3: {
    q: 'How many years of experience do you require?',
    inp: true,
    conf: true,
    ans: [
      'I am a great fit for your company!',
      'I may be a good fit for your company.',
      'I am not the perfect fit for your company, but maybe in a few years I will!',
    ],
  },
};
