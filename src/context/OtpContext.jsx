import React, { createContext, useState, useContext, useEffect } from 'react';

const OtpContext = createContext();

export const useOtpAuth = () => {
  return useContext(OtpContext);
};

export const OtpProvider = ({ children }) => {
  const [registrationData, setRegistrationData] = useState(null);
  // Check localStorage to keep the user logged in across page reloads
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!localStorage.getItem('isAuthenticated'));

  const login = () => {
    localStorage.setItem('isAuthenticated', 'true'); // Persist login state
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated'); // Clear login state
    setIsAuthenticated(false);
    setRegistrationData(null); // Clear user data
  };

  const value = {
    registrationData,
    setRegistrationData,
    isAuthenticated,
    login,
    logout,
  };

  return (
    <OtpContext.Provider value={value}>
      {children}
    </OtpContext.Provider>
  );
};