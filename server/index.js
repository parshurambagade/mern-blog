import 'dotenv/config'
import express from 'express';
import connectMongo from './db/connect.js';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';

import cors from 'cors';
import  path  from 'path';

const app = express();

connectMongo();

app.use(cors());
app.use(express.json());
app.use('/public/uploads', express.static(path.join(path.resolve(), '/public/uploads')));

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/user", userRoutes);



app.get('/', (req,res) => {
    res.send("Hello");
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on the port ${process.env.PORT || 5000}`);
});