import { useRef, type RefObject } from 'react';

export default function useArrayRef<T>(): [
   RefObject<T>[],
   (el: T | null) => void
] {
   const refs = useRef<RefObject<T>[]>([]);

   const addRef = (el: T | null) => {
      if (el) {
         const ref = { current: el };
         refs.current.push(ref);
      }
   };

   return [refs.current, addRef];
}

//  const [elements, ref] = useArrayRef();
