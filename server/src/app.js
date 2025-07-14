// Sets up express app, routes, middleware — but DOES NOT start server
const express = require('express');
const app = express();
const postRoutes = require('./routes/posts');

app.use(express.json());
app.use('/api/posts', postRoutes);

module.exports = app;
