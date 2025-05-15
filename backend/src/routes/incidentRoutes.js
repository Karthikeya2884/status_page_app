const express = require('express');
const router = express.Router();
const { getIncidents, createIncident, updateIncident, resolveIncident } = require('../controllers/incidentController');

router.get('/', getIncidents);
router.post('/', createIncident);
router.put('/:id', updateIncident);
router.patch('/:id/resolve', resolveIncident);

module.exports = router;