import React, { createContext, useState, ReactNode } from 'react';

const MainContext = createContext<{
  modalStatus: boolean;
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export function MainProvider ( { children }: { children: ReactNode } ) {
  const [modalStatus, setModalStatus] = useState(false);


  return (
    <MainContext.Provider value={{ modalStatus, setModalStatus }}>
      {children}
    </MainContext.Provider>
  )
}

export default MainContext