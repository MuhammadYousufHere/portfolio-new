import Link from 'next/link';
import { type AnchorHTMLAttributes, type DetailedHTMLProps } from 'react';

export default function CustomLink({
   href,
   children,
   ...rest
}: DetailedHTMLProps<
   AnchorHTMLAttributes<HTMLAnchorElement>,
   HTMLAnchorElement
>) {
   const isInternalLink = href && href.startsWith('/');
   const isAnchorLink = href && href.startsWith('#');

   if (isInternalLink) {
      return (
         <Link href={href} legacyBehavior>
            {children}
         </Link>
      );
   }

   if (isAnchorLink) {
      return (
         <a href={href} {...rest}>
            {children}
         </a>
      );
   }
}
