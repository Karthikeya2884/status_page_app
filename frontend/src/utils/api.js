const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

export const fetchServices = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/services`);
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch services:', error);
    return [];
  }
};

export const fetchIncidents = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/incidents`);
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch incidents:', error);
    return [];
  }
};

export const createService = async (service) => {
  try {
    const response = await fetch(`${API_BASE_URL}/services`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(service),
    });
    return await response.json();
  } catch (error) {
    console.error('Failed to create service:', error);
    return null;
  }
};