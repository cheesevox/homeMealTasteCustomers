import { createContext, useContext, useState } from 'react';

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [fcmToken, setFcmToken] = useState(null);

  const setToken = (token) => {
    setFcmToken(token);
  };

  return (
    <TokenContext.Provider value={{ fcmToken, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  return useContext(TokenContext);
};