import dotenv from "dotenv";
const envFile = process.env.NODE_ENV === "production" ? ".env.prod" : ".env";
dotenv.config({ path: envFile });

export const config = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT || "3000", 10),
//   dbUrl: process.env.DB_URL || "",
//   jwtSecret: process.env.JWT_SECRET || "",
};
