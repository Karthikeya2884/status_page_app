const express = require('express');
const serviceRoutes = require('./routes/serviceRoutes');
const incidentRoutes = require('./routes/incidentRoutes');
const errorHandler = require('./middlewares/errorMiddleware');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/services', serviceRoutes);
app.use('/api/incidents', incidentRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));