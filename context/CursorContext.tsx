import {
   createContext,
   useContext,
   useMemo,
   useState,
   type ReactNode,
} from 'react';

export type CursorLookType =
   | 'default'
   | 'menu'
   | 'slider-drag'
   | 'link'
   | 'items';

export interface CustomCursorType {
   type: CursorLookType;
   setType: (type: CursorLookType) => void;
}

export const CustomCursorContext = createContext<CustomCursorType>(
   {} as CustomCursorType
);
interface Props {
   children: ReactNode;
}
export default function CustomCursorProvider({ children }: Props) {
   const [type, setType] = useState<CursorLookType>('default');
   const values = useMemo(() => ({ type, setType }), [type]);
   return (
      <CustomCursorContext.Provider value={values}>
         {children}
      </CustomCursorContext.Provider>
   );
}

export const useCursorContext = () => useContext(CustomCursorContext);
