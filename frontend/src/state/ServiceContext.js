import React, { createContext, useState } from 'react';

export const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [incidents, setIncidents] = useState([]);

  const addService = (service) => {
    setServices([...services, service]);
  };

  return (
    <ServiceContext.Provider value={{ services, addService, incidents, setIncidents }}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;