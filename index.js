import express from 'express'
import dotenv from 'dotenv'
import {mongoose} from 'mongoose'
import cors from 'cors'
import  connectDb  from './config/userConfig.js'
import router from './routes/userRoutes.js'
dotenv.config()

// initialisation
const app = express()

// database configuration
connectDb()

// json-parsing
app.use(express.json())

// CORS
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))

// API Route 
app.use('/api/v1', router)

// PORT
const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Server started on Port ${PORT}`)
})

