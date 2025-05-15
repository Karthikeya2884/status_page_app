import React from 'react';
import ServiceCard from '../components/ServiceCard';

const DashboardPage = ({ services, onAddService }) => {
  const handleAddService = () => {
    const name = prompt('Enter service name:');
    const status = prompt('Enter service status:');
    onAddService({ name, status });
  };

  return (
    <div className="dashboard-page">
      <h1>Admin Dashboard</h1>
      <button onClick={handleAddService}>Add Service</button>
      <section>
        <h2>Manage Services</h2>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>
    </div>
  );
};

export default DashboardPage;