import { createContext, type Dispatch, type SetStateAction } from 'react';

export const SmoothScrollContext = createContext({
   isReady: false,
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   setIsReady: (() => {}) as Dispatch<SetStateAction<boolean>>,
});
