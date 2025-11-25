import express from "express"
import cors from "cors"
import dotenv from "dotenv";
dotenv.config()
const app = express();
console.log(process.env.CORS_ORIGIN);

app.use(cors({
  origin: process.env.CORS_ORIGIN.split(","),
  credentials: true
}))


app.use(express.json());

//importing routes
import healthCheckRouter from "./routes/healthCheck.routes.js"
import linkRouter from "./routes/api.routes.js"
import redirectRouter from "./routes/redirect.routes.js"
app.use("/",healthCheckRouter)
app.use("/api",linkRouter)
app.use("/",redirectRouter)

export {app}