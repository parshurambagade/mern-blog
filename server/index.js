import 'dotenv/config'
import express from 'express';
import connectMongo from './db/connect.js';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';

const app = express();

connectMongo();

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

app.get('/', (req,res) => {
    res.send("Hello");
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on the port ${process.env.PORT || 5000}`);
});