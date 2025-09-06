const express = require('express');
require('dotenv').config();
const { connection } = require('./postgress/postgress');

const app = express();

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connection(); 