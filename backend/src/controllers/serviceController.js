const prisma = require('../utils/prismaClient');

const getServices = async (req, res) => {
  try {
    const services = await prisma.service.findMany();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
};

const createService = async (req, res) => {
  try {
    const { name, status } = req.body;
    const service = await prisma.service.create({ data: { name, status } });
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create service' });
  }
};

const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedService = await prisma.service.update({
      where: { id: parseInt(id) },
      data: { status },
    });
    res.json(updatedService);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update service' });
  }
};

const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.service.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete service' });
  }
};

module.exports = { getServices, createService, updateService, deleteService };