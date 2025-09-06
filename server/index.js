import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { connection } from './postgress/postgress.js';
import router from './view/routes.js';
import cors from 'cors';

const PORT = process.env.PORT || 3000; 

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connection(); 