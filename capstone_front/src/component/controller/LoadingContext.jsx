import React, { createContext, useState, useContext } from 'react';

const LoadingContext = createContext();

export const LoadProvider = ({ children }) => { //사진 데이터 로드 여부를 확인하는 LoadProvider 전역으로 사용가능
    const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);
  };

  const loaded = () => {
    setLoading(false);
  };
  return (
    <LoadingContext.Provider value={{ loading, load, loaded }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoad = () => useContext(LoadingContext);
