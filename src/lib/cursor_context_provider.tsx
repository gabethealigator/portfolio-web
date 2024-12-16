import { createContext, useState, useContext } from 'react';

type CursorVariant = 'default' | 'buttonHover'  | 'textHover';

interface CursorContextType {
  cursorVariant: CursorVariant;
  setCursorVariant: (variant: CursorVariant) => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorVariant: 'default',
  setCursorVariant: () => {},
});

export const useCursorContext = () => useContext(CursorContext);

export const CursorContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');

  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant }}>
      {children}
    </CursorContext.Provider>
  );
};

