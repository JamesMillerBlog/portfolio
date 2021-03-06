/*eslint max-len: ["error", { "code": 500 }]*/

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
      header: 'Epic Mind Drive',
      paragraph: 'MoneySupermarket.com wanted to celebrate the release of telematics boxes for insurees car’s, by rewarding drivers with more than just cheaper car insurance. I worked for Kerve Creative, who delivered an experience that allowed users to drive a car using their mind.',
    }, {
      header: 'My Other Life',
      paragraph: 'Merck Serono created a new drug to help MS patients manage their symptoms and wanted to show how it was changing lives. To help people empathise living with the symptoms, Momentum Worldwide created an immersive VR experience with the HTC Vive and custom made hardware - to put users inside the life of suffers.'
    }, {
      // header: "Welcome to my portfolio",
      // footer: "Made from React & Redux"
    }, {
      header: 'Caddy Clubhouse',
      paragraph: 'SAP wanted to use data to help golf enthusiasts improve their game during the BMW International Golf Open. I worked as part of a team of developers and designers to create an experience that analysed a users golfing performance in preparation for a session with a professional coach, who used this projection mapped data to mentor players.',
    }, {
      header: 'Hole In The Wall',
      paragraph: 'Krispy Kreme wanted to create a spectacle to celebrate the release of their new Nutty Chocolatta doughnut. I helped bring interactivity to the window display that allowed customers to use their contactless bank cards to pay for the product, bringing the window display to life and ultimately receiving their doughnut through a hole in the wall.',
    }, {
      header: 'What It Means To Be A Maker',
      paragraph: 'This research was focussed on understanding the mental and physical processes that lie at the heart of making. Through the use of various tools, 2 wooden records were created that represented the different aspects of what it means to make.',
    }, {
      header: 'MAIA',
      paragraph: 'ADT wanted to show their brand in a more playful context, by catching ‘petty pilferers’. I developed the electronics and program for a series IOT devices, that took photos of the ‘petty pilferers’ using a camera and sent the images via a 4g connection to the users mobile device.',
    }
  ],
  itemImage: [
    { // mood tree
      webvr: 'moodtree-webvr.png',
      webvrScrolled: 'moodtree-scrolled-webvr.png',
      unscrolled: 'moodtree.png',
      scrolled: 'moodtree-scrolled.png',
      clicked: 'moodtreegif.mp4',
      marginLeft: 9,
      marginTop: 10,
      clickedMarginLeft: 22,
      clickedMarginTop: 22
    },
    { // beer pump
      webvr: 'beer-webvr.png',
      webvrScrolled: 'beer-scrolled-webvr.png',
      unscrolled: 'beer.png',
      scrolled: 'beer-scrolled.png',
      clicked: 'beergif.mp4',
      marginLeft: 3,
      marginTop: 8,
      clickedMarginLeft: 20,
      clickedMarginTop: 20
    },
    { // epic mind drive
      webvr: 'epic-webvr.png',
      webvrScrolled: 'epic-scrolled-webvr.png',
      unscrolled: 'epic.png',
      scrolled: 'epic-scrolled.png',
      clicked: 'epicgif.mp4',
      marginLeft: 8,
      marginTop: 4,
      clickedMarginLeft: 22,
      clickedMarginTop: 20
    },
    { // my other life
      webvr: 'merck-webvr.png',
      webvrScrolled: 'merck-scrolled-webvr.png',
      unscrolled: 'merck.png',
      scrolled: 'merck-scrolled.png',
      clicked: 'merckgif.mp4',
      marginLeft: 5,
      marginTop: 8,
      clickedMarginLeft: 26,
      clickedMarginTop: 21
    },
    { unscrolled: 'krispy.png', scrolled: 'krispy-scrolled.png', clicked: 'krispy.gif' },
    { unscrolled: 'sap.png', scrolled: 'sap-scrolled.png', clicked: 'sap.gif' },
    { unscrolled: null, scrolled: null, clicked: null },
    { unscrolled: 'maker.png', scrolled: 'maker-scrolled.png', clicked: 'maker.gif' },
    { unscrolled: 'adt.png', scrolled: 'adt-scrolled.png', clicked: 'adt.gif' }
  ],
  itemVideo: [
    {
      videoID: 'moodtree.mp4', // moodtree
      videoLength: 103000,
      youtube: 'yVKqqdlHPLI',
      webvrYoutube: 'gvH1MHfv-nI',
    }, {
      videoID: 'beerpump.mp4', // pay@pump
      videoLength: 64000,
      youtube: '8ycTf2TDH_I',
      webvrYoutube: 'qR6JDCNV-pw'
    }, {
      videoID: 'epic.mp4', // epic mind drive
      videoLength: 102000,
      youtube: 'K3N18cqnzHg',
      webvrYoutube: 'jlUxbGY2guM'
    }, {
      videoID: 'merck.mp4', // merck next gen vr
      videoLength: 114000,
      youtube: 'FPOmiqU4bIs',
      webvrYoutube: 'R7i77wmA4fk'
    }, {
      // hero text: video not applicable
    }, {
      videoID: 'T19vR9AxUug' // caddy clubhouse
    }, {
      videoID: 'AlvdRkRewvA' // hole in the wall
    }, {
      videoID: '5hHonl2hmiU' // what it means to be a maker
    }, {
      videoID: '36XGBIJLyN4' // MAIA
    }
  ],
  // -370
  itemPosition: [
    { marginLeft: 1, marginTop: 300 },
    { marginLeft: 600, marginTop: 1 },
    { marginLeft: 2700, marginTop: 1 },
    { marginLeft: 3250, marginTop: 300 },
    { null: null },
    { marginLeft: 800, marginTop: 230 },
    { marginLeft: 800, marginTop: 230 },
    { marginLeft: 800, marginTop: 230 },
    { marginLeft: 800, marginTop: 230 },
  ],
  heroFooterText: {
    none: {
      text: 'INTERACTIVE DESIGN & DEVELOPMENT SERVICES',
      color: '#7c7c7c'
    },
    centerIcon: {
      text: "Creative technology ideas I've helped agencies bring to life",
      logoTextScrolled: 'View this website in WebVR',
      logoTextScrolledWebVR: 'Exit WebVR Mode',
      logoTextScrolledMobileWebVR: 'Exit WebVR Mode',
      color: '#008f9c'
    },
    centerLeftIcon: {
      text: 'Tell me about your ideas on: hi@jamesmiller.blog',
      color: '#1d9c00'
    },
    centerRightIcon: {
      text: 'Learn and teach yourself something new',
      color: '#e4bc02'
    }
  },
  heroIcon: {
    centerRightIcon: {
      name360: 'centerRightIcon',
      backgroundColor: '#e4bc02',
      image360: 'tech.png',
      href: '/services',
      target: '_self'
    },
    centerLeftIcon: {
      name360: 'centerLeftIcon',
      backgroundColor: '#1d9c00',
      image360: 'mail.png',
      href: 'mailto:hi@jamesmiller.blog',
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
      backgroundImage360: 'design.png',
      logoImageScrolled: 'webvr.png',
      centerLogoIconName: 'web',
      href: '/webvr',
      webvrCenterLogoIconName: 'webvr',
      mobileWebvrCenterLogoIconName: 'mobile-webvr',
      webvrLogoImageScrolled: 'web.png',
      mobileWebvrLogoImageScrolled: 'web.png',
      webvrhref: '/',
      mobilewebvrhref: '/'
    }
  }
};
