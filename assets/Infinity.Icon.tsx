import * as React from 'react';
import { type SVGProps } from 'react';

const SvgComponent: React.FC<SVGProps<SVGSVGElement>> = (props) => (
   <svg
      viewBox="0 0 295 137"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <path
         d="M266.688 28.591c22.059 22.06 22.059 57.694 0 79.754-22.06 22.625-57.694 22.625-79.754.565l-39.593-40.16-39.594-40.159c-22.06-22.059-57.694-22.059-79.753 0-22.06 22.06-22.06 58.26 0 80.319 22.06 22.06 57.694 22.06 79.753 0l79.187-80.319c22.06-22.059 57.694-22.059 79.754 0Z"
         stroke="#EDECE7"
         strokeWidth={22.625}
         strokeMiterlimit={10}
      />
   </svg>
);

export default SvgComponent;
