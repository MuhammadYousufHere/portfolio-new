import { createContext, useMemo, useState, type ReactNode } from 'react';

export type TLoaderContex = {
   isLoading: boolean;
   setIsLoading: (value: boolean) => void;
};
export const LoadingContext = createContext<TLoaderContex>({
   isLoading: true,
   setIsLoading: () => false,
});

export default function LoaderProvider({ children }: { children: ReactNode }) {
   const [isLoading, setIsLoading] = useState(true);
   const contextValue = useMemo(
      () => ({ isLoading, setIsLoading }),
      [isLoading, setIsLoading]
   );
   return (
      <LoadingContext.Provider value={contextValue}>
         {children}
      </LoadingContext.Provider>
   );
}
