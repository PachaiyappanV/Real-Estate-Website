import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';
dotenv.config()

const app = express();

const PORT = process.env.PORT;

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"*",
}))
app.use(morgan('tiny'));



app.use('/api/user', userRoute)
app.use("/api/residency", residencyRoute)



app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});