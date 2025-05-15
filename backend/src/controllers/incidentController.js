const prisma = require('../utils/prismaClient');

const getIncidents = async (req, res) => {
  try {
    const incidents = await prisma.incident.findMany({ include: { service: true } });
    res.json(incidents);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch incidents' });
  }
};

const createIncident = async (req, res) => {
  try {
    const { description, status, serviceId } = req.body;
    const incident = await prisma.incident.create({
      data: { description, status, serviceId },
    });
    res.status(201).json(incident);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create incident' });
  }
};

const updateIncident = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedIncident = await prisma.incident.update({
      where: { id: parseInt(id) },
      data: { status },
    });
    res.json(updatedIncident);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update incident' });
  }
};

const resolveIncident = async (req, res) => {
  try {
    const { id } = req.params;
    const resolvedIncident = await prisma.incident.update({
      where: { id: parseInt(id) },
      data: { status: 'Resolved' },
    });
    res.json(resolvedIncident);
  } catch (error) {
    res.status(500).json({ error: 'Failed to resolve incident' });
  }
};

module.exports = { getIncidents, createIncident, updateIncident, resolveIncident };