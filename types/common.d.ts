import { type ReactNode } from 'react';

export type PropsWithChildren<P> = P & { children?: ReactNode };

export interface LocoScrollAttrs {
   /**
    * Detect if in-view.
    */
   'data-scroll'?: boolean;
   /**
    * (Optional) Useful if you want to scope your element and get the progress of your element in the viewport for example.
    */
   'data-scroll-id'?: string;
   /**
    * Element in-view trigger call event.
    */
   'data-scroll-call'?: string;
   /**
    * top, bottom, left or right
    * Window position of in-view trigger.
    */
   'data-scroll-position'?: 'top' | 'bottom' | 'left' | 'right';
   /**
    * Element in-view class.
    */
   'data-scroll-class'?: string;
   /**
    * Element in-view detection repeat.
    */
   'data-scroll-repeat'?: boolean;
   /**
   * Element in-view trigger offset : bottom,top
    First value is bottom offset, second (optional) is top offset.
    Percent is relative to viewport height, otherwise it's absolute pixels.
    E.g. "10", "100,50%", "25%, 15%"
   */
   'data-scroll-offset'?: string;
   /**
    * Element parallax speed. A negative value will reverse the direction.
    */
   'data-scroll-speed'?: string;
   /**
    * Element's parallax lerp delay.
    */
   'data-scroll-delay'?: number;
   /**
    * Element's parallax direction. vertical or horizontal
    */
   'data-scroll-direction'?: 'vertical' | 'horizontal';
   /**
    * Sticky element. Starts and stops at data-scroll-target position.
    */
   'data-scroll-sticky'?: boolean;
   /**
    * Target element's in-view position.
    */
   'data-scroll-target'?: string;
}
