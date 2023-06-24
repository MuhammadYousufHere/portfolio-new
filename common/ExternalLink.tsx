import React from 'react';

export type ExternalLinkType = 'phone' | 'email' | 'website';

// eslint-disable-next-line no-undef
type ExternalLinkProps = JSX.IntrinsicElements['a'] & {
   type?: ExternalLinkType;
   to: string;
};

const makeHrefFromType = (type: ExternalLinkType, to: string) => {
   switch (type) {
      case 'phone':
         return `tel:${to}`;
      case 'email':
         return `mailto:${to}`;
      default:
         return `http://${to}`;
   }
};

const ExternalLink = ({
   target = `_blank`,
   to = '/',
   type,
   ...props
}: ExternalLinkProps) => {
   const hrefWithType = type ? makeHrefFromType(type, to) : to;
   return (
      <a
         {...props}
         href={hrefWithType}
         target={target}
         rel="noreferrer noopener"
      >
         {props.children}
      </a>
   );
};

export default ExternalLink;
