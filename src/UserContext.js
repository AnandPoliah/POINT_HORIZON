import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);
export const BusDetailsContext = createContext(null);

export const UserProviders = ({ children }) => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const [busDetails, setBusDetails] = useState({
    bname: '',
    fromtime: '',
    totime: '',
    rating: '',
    price: '',
    availseats: '',
    cancellation:'',
    cancelbefore:'',
    livetracking:'',
    fromplace:'',
    toplace:''
  });

  const [bname,setBname]=useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BusDetailsContext.Provider value={{ busDetails, setBusDetails }}>
        {children}
      </BusDetailsContext.Provider>
    </UserContext.Provider>
  );
};
