import express from 'express';
import { config } from "./config";
import v1Routes from "./api/routes/index";
import cors from 'cors'
import helmet from 'helmet';

const app = express();
const PORT = config.port || 8081;

app.use(express.json());
app.use(helmet())
// var whitelist = ['http://localhost:5173', 'http://localhost:5174']
// var corsOptions = {
//   origin: function (origin: any, callback: Function) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors({
//   origin: 'http://localhost:5173', // or '*' for all origins
//   methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
//   credentials: true
// }));
const whitelist = ['http://localhost:5173', 'http://localhost:5174'];

const corsOptions = {
  origin: function (origin:any, callback:Function) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true
};

// ✅ Use corsOptions here
app.use(cors(corsOptions));
app.use("/api/v1", v1Routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));