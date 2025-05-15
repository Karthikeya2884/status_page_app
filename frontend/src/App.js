import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ServiceProvider, { ServiceContext } from './state/ServiceContext';
import './styles/global.css';

const App = () => {
  const { services, incidents, addService } = useContext(ServiceContext);

  useEffect(() => {
    // Fetch initial data here if needed
  }, []);

  return (
    <ServiceProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage services={services} incidents={incidents} />}
          />
          <Route
            path="/dashboard"
            element={<DashboardPage services={services} onAddService={addService} />}
          />
        </Routes>
      </Router>
    </ServiceProvider>
  );
};

export default App;
