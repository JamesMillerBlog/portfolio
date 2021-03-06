/*eslint max-len: ["error", { "code": 500 }]*/
//
export default {
  page: 'home',
  itemText: [
    {
      header: 'Mood Tree',
      paragraph: 'D&AD wanted to promote social activity during their design festival. I worked for Kerve Creative in Bath, who created an installation that used Twitter’s API and Stanfords Natural Language parser, to analyse live tweets on the events ‘#’. A keyword and colour was displayed on each of the trees leaves, based on that tweets collected sentiment.',
    }, {
      header: 'Pay @ Pump',
      paragraph: 'Barclaycard wanted to explore how their contactless technology could help reduce queues at bars on nights out. Using their contactless card payment system, I worked for Kerve Creative who created a prototype beer pump, that was automated to accurately pour a pint of beer once a successful payment had been received.',
    }, {
      header: 'Hole In The Wall',
      paragraph: 'Krispy Kreme wanted to create a spectacle to celebrate the release of their new Nutty Chocolatta doughnut. I worked for Kerve Creative, who created an interactive window display that allowed customers to use their contactless bank cards to pay for products.',
    }, {
      header: 'Caddy Clubhouse',
      paragraph: 'SAP wanted to use data to help golf enthusiasts improve their game during the BMW International Golf Open. I worked as part of a team at Momentum Worldwide, to create an experience that analysed a users golfing performance in preparation for a session with a professional coach, who used this projection mapped data to mentor players.',
    }, {
      // header: "Welcome to my portfolio",
      // footer: "Made from React & Redux"
    }, {
      header: 'My Other Life',
      paragraph: 'Merck Serono created a new drug to help MS patients manage their symptoms and wanted to show how it was changing lives. To help people empathise living with the symptoms, Momentum Worldwide created an immersive VR experience with the HTC Vive and custom made hardware - to put users inside the life of suffers.'
    }, {
      header: 'Epic Mind Drive',
      paragraph: 'MoneySupermarket.com wanted to celebrate the release of telematics boxes for insurees car’s, by rewarding smarter drivers with more than just cheaper car insurance. I worked for Kerve Creative, who delivered an experience that allowed users to drive a car using their mind.',
    }, {
      header: 'Explore Egypt',
      paragraph: 'The Egypt Tourism Authority wanted to attract the attention of international businesses at the World Travel Market to help bring commerce into the country. Momentum Worldwide created a stand that showed off the countries top attractions using interactive screens, VR and AR experiences.',
    }, {
      header: 'MAIA',
      paragraph: 'ADT wanted to show their brand in a more playful context, by catching ‘petty pilferers’. I worked for Kerve Creative, who created a series IOT devices that took photos of the ‘petty pilferers’ using a camera and sent the images via a 4g connection to the users mobile device.',
    }
  ],
  itemImage: [
    { png: 'moodtree.png', gif: 'moodtree.gif' },
    { png: 'beer.png', gif: 'beer.gif' },
    { png: 'krispy.png', gif: 'krispy.gif' },
    { png: 'sap.png', gif: 'sap.gif' },
    { png: null, gif: null },
    { png: 'merck.png', gif: 'merck.gif' },
    { png: 'epic.png', gif: 'epic.gif' },
    { png: 'egypt.png', gif: 'egypt.gif' },
    { png: 'adt.png', gif: 'adt.gif' }
  ],
  itemVideo: [
    {
      videoID: 'yVKqqdlHPLI' // moodtree
    }, {
      videoID: '8ycTf2TDH_I' // pay@pump
    }, {
      videoID: 'AlvdRkRewvA' // hole in the wall
    }, {
      videoID: 'T19vR9AxUug' // caddy clubhouse
    }, {
      // hero text: video not applicable
    }, {
      videoID: 'FPOmiqU4bIs' // merck next gen vr
    }, {
      videoID: 'K3N18cqnzHg' // epic mind drive
    }, {
      videoID: 'E4ga2by5Q1k' // egypt
    }, {
      videoID: '36XGBIJLyN4' // MAIA
    }
  ],
  heroFooterText: {
    none: {
      text: 'INTERACTIVE ART, DESIGN & TECHNOLOGY DEVELOPMENT',
      color: '#7c7c7c'
    },
    centerIcon: {
      // Hi 'X', thanks for accepting the invitation to view my portfolio and I hope you enjoy these projects that have been custom selected for your to view.
      text: "Creative technology ideas I've helped bring to life",
      color: '#008f9c'
    },
    centerLeftIcon: {
      text: 'Tell me about your ideas on: hi@jamesmiller.design',
      color: '#1d9c00'
    },
    centerRightIcon: {
      text: 'Learn and teach yourself something new',
      color: '#e4bc02'
    },
    webvr: {
      text: 'Experience this website in Web VR',
      color: '#008f9c'
    }
  },
  heroIcon: {
    centerRightIcon: {
      backgroundColor: '#e4bc02',
      scrolledBackgroundPosition: '51.5% 125%',
      image: 'techIcon.png',
      href: 'https://jamesmiller.blog',
      target: '_self'
    },
    centerLeftIcon: {
      backgroundColor: '#1d9c00',
      image: 'mailIcon.png',
      href: 'mailto:hi@jamesmiller.design',
      target: '_blank'
    }
  },
  heroText: {
    none: {
      text: ['j', 'm'],
      backgroundColor: '#7c7c7c'
    },
    centerLeftIcon: {
      text: ['']
    },
    centerRightIcon: {
      text: ['']
    },
    centerIcon: {
      text: [''],
      backgroundColor: '#008f9c',
      backgroundImage: 'designIcon.png',
      scrollableHeroIcon: 'webvr',
      scrolledBackgroundImage: 'webvrIcon.png',
      href: '/webvr',
      targer: '_self'
    }
  }
};
