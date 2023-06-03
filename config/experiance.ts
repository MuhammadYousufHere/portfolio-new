export type Company = 'Auxin Security' | 'Xeverse' | 'IBEX';

export type CompanyDetail = {
   name: string;
   longName: string;
   subDetail?: string;
   url: string;
   position: string;
   duration: string;
   logo: {
      light: string;
      dark?: string;
   };
   //  roles?: JSX.Element[]
};

export const Experiences: {
   [key in Company]: CompanyDetail;
} = {
   'Auxin Security': {
      name: 'Auxin Security',
      longName: 'Computer and Network Security',
      subDetail:
         'Secure everything from Code to Cloud and in between - Products, Services and Consulting',
      url: 'https://auxin.io/',
      position: 'Lead Front-End Engineer',
      duration: 'Jan 2023 - Present',
      logo: {
         light: 'https://auxin.io/wp-content/uploads/2022/11/2-1-1.png',
         dark: 'https://auxin.io/wp-content/uploads/2022/11/2-1-1.png',
      },
      // roles: [
      //    <>
      //       Started early January and undergoing training for the product AlphaScale and different
      //       services it provides in cybersecurity.{' '}
      //    </>,
      //    <>
      //       Working as a Lead Front-End Engineer on
      //       <Link
      //          aria-label="AlphaScale"
      //          href="https://console.auxin.cloud/"
      //          target="_blank"
      //          rel="noreferrer"
      //       >
      //          AlphaScale
      //       </Link>
      //    </>,
      // ],
   },
   Xeverse: {
      name: 'Xeverse',
      longName: 'Scentregroup Limited AU',
      subDetail: 'A software dev firm providing next gen customized solutions',
      url: 'https://xeverse.io/',
      position: 'MERN Stack Developer',
      duration: 'Oct 2022 - Jan 2023',
      logo: {
         light: 'https://xeverse.io/static/727ab4b82fb7554aa9d630e877f397db/ba86f/logo-green.webp',
         dark: 'https://xeverse.io/static/727ab4b82fb7554aa9d630e877f397db/ba86f/logo-green.webp',
      },
      // roles: [
      //    <>
      //       Revamping the legacy Partner Portal into a new{' '}
      //       <Link
      //          aria-label="Westfield Marketing Hub"
      //          href="https://partner.scentregroup.com/"
      //          target="_blank"
      //          rel="noreferrer"
      //       >
      //          Westfield Marketing Hub
      //       </Link>{' '}
      //       using NextJS and Typescript. Restructuring the old express app into a newer
      //       architectural design approach.
      //    </>,
      //    <>Created multiple Contentful and Bynder extensions to improve BX process better.</>,
      //    <>
      //       Worked on creating SPA for
      //       <Link
      //          variant="primaryLink"
      //          href="https://www.saveatrain.com/en"
      //          target="_blank"
      //          rel="noreferrer"
      //       >
      //          SaveTheTrain
      //       </Link>{' '}
      //       main site in React TS.
      //    </>,

      // ],
   },
   IBEX: {
      name: 'IBEX',
      longName: 'IBEX Digital',
      subDetail: `An elite CX outsourcer for the world's startups, scale-ups, and blue-chips`,
      url: 'https://www.ibex.co/',
      position: 'Junior Software Engineer',
      duration: 'Jun 2022 - Nov 2022',
      logo: {
         light: 'https://www.ibex.co/web/assets/images/ibex-logo.svg',
         dark: 'https://www.ibex.co/web/assets/images/ibex-logo.svg',
      },
      // roles: [
      //    <>
      //       Developed a Twitter Raffle Campaign / Contest Bot called Camps with statistics similar
      //       to Facebook Ads.
      //    </>,
      //    <>
      //       In 2019 got promoted as Senior Software Engineer and worked with Cryto Exchange, Smart
      //       Contracts and other APIs using several techs such as NodeJS, .NET Core and React.
      //    </>,
      //    <>
      //       Create highly scalable Japanese e-commerce sites. Most notable clients were TV Tokyo,
      //       Layla EC using .NET.
      //    </>,
      //    <>
      //       Hired at 2016, Undergone Japanese language training first. Shortly after, worked with
      //       in-house .NET MVC Framework called ERS.
      //    </>,
      // ],
   },
};

export const ExperiencesList = [
   Experiences['Auxin Security'],
   Experiences.Xeverse,
   Experiences.IBEX,
];
