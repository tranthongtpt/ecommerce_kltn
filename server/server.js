import  express  from "express";
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productsRoute from "./routes/ProductRoutes.js";
import { errorHandler, notFound } from "./middleware/error.js";
import userRouter from "./routes/UserRoutes.js";
import orderRouter from "./routes/oderRoutes.js";
import caterogyRoute from "./routes/CaterogyRoutes.js";

dotenv.config()
connectDatabase()
const app = express()
app.use(express.json())

//API
app.use("/api/caterogy", caterogyRoute)
app.use("/api/import", ImportData)
app.use("/api/products", productsRoute)
app.use("/api/users", userRouter)
app.use("/api/orders", orderRouter)
app.use("/api/config/paypal", (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID)
})
//Error
app.use(notFound)
app.use(errorHandler)

app.get("/", (req, res) => {
    res.send("Api is running...")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server run in port ${PORT}`))