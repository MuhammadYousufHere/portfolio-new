import { Logo } from '@my/assets';
import classNames from 'classnames';
import gsap from 'gsap/dist/gsap';
import React, { useEffect } from 'react';
import styles from './style.module.css';

const Loader: React.FC<{ isScrollReady: boolean }> = ({ isScrollReady }) => {
   const [hasRun, setHasRun] = React.useState(false);
   useEffect(() => {
      if (isScrollReady) {
         gsap
            .timeline({
               onComplete: () => {
                  setHasRun(true);
               },
            })
            .to('#loader', {
               alpha: 0,
               delay: 1,
            });
      }
   }, [isScrollReady]);

   if (hasRun) return null;

   return (
      <div
         id="loader"
         className={classNames({
            [styles.loading_modal]: true,
            // [styles.loading_modal__hidden]: isScrollReady,
         })}
      >
         <div className={styles.logo}>
            <Logo />
         </div>
      </div>
   );
};

export default Loader;
