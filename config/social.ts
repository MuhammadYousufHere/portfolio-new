import { type IconType } from 'react-icons';
import {
   FaDev,
   FaGithub,
   FaInstagram,
   FaLinkedin,
   FaStackOverflow,
   FaTwitter,
   FaYoutube,
} from 'react-icons/fa';

type SocialMedia = {
   label: string;
   href: string;
   icon: IconType;
};

export const SocialMedias: SocialMedia[] = [
   {
      label: 'Twitter',
      href: 'https://twitter.com/myousuf_here',
      icon: FaTwitter,
   },
   {
      label: 'Instagram',
      href: 'https://www.instagram.com/m.yousuf_here/',
      icon: FaInstagram,
   },
   {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muhammadyousuf-here/',
      icon: FaLinkedin,
   },
   {
      label: 'StackOverflow',
      href: 'https://stackoverflow.com/users/16859685/muhammad-yousuf',
      icon: FaStackOverflow,
   },
   {
      label: 'Youtube',
      href: 'https://youtube.com/@codinginkarachi',
      icon: FaYoutube,
   },
   {
      label: 'Github',
      href: 'https://github.com/MuhammadYousufHere',
      icon: FaGithub,
   },
   {
      label: 'Dev.to',
      href: 'https://dev.to/muhammadyousuf',
      icon: FaDev,
   },
];
