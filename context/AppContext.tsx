import {
   createContext,
   useContext,
   useMemo,
   useRef,
   useState,
   type Dispatch,
   type ReactNode,
   type RefObject,
   type SetStateAction,
} from 'react';

export type TAppContext = {
   isLoading: boolean;
   setIsLoading: (value: boolean) => void;
   locoScroll: boolean;
   setLocoScroll: Dispatch<SetStateAction<boolean>>;
   cursorRef: RefObject<HTMLDivElement>;
};
export const AppContext = createContext<TAppContext>({} as TAppContext);

export default function AppProvider({ children }: { children: ReactNode }) {
   const [isLoading, setIsLoading] = useState(true);
   const [locoScroll, setLocoScroll] = useState(false);
   const cursorRef = useRef<HTMLDivElement>(null);
   const contextValue = useMemo(
      () => ({ isLoading, setIsLoading, cursorRef, locoScroll, setLocoScroll }),
      [isLoading, locoScroll]
   );
   return (
      <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
   );
}
export const useAppContext = () => useContext(AppContext);
