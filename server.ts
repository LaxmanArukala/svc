import express from 'express';
import { config } from "./config";
import v1Routes from "./api/routes/index";
import cors from 'cors'

const app = express();
const PORT = config.port || 8081;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // or '*' for all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
  credentials: true
}));
app.use("/api/v1", v1Routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));