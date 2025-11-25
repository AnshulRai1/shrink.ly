import express from "express"
import cors from "cors"

const app = express();
app.use(cors({
    origin:"http://localhost:5173",
    allowedHeaders:false
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