import React from 'react';

const IncidentCard = ({ incident }) => {
  return (
    <div className="incident-card">
      <h3>{incident.description}</h3>
      <p>Status: {incident.status}</p>
    </div>
  );
};

export default IncidentCard;