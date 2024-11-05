
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import blog routes
const blogRoutes = require('./routes/blogRoutes');
app.use('/api', blogRoutes);

// Define a port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});