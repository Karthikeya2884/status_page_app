import React from 'react';
import ServiceCard from '../components/ServiceCard';
import IncidentCard from '../components/IncidentCard';

const HomePage = ({ services, incidents }) => {
  return (
    <div className="homepage">
      <h1>Status Page</h1>
      <section>
        <h2>Services</h2>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>
      <section>
        <h2>Incidents</h2>
        {incidents.map((incident) => (
          <IncidentCard key={incident.id} incident={incident} />
        ))}
      </section>
    </div>
  );
};

export default HomePage;