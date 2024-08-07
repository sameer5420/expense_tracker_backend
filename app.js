const express=require('express')
const userRouter=require('./routes/userRouter')
const mongoose=require('mongoose')
const cors=require('cors')
const errorHandler=require('./middlewares/errorHandlerMiddleware')
const app=express()
const categoryRouter=require('./routes/categoryRouter')
const transactionRouter=require('./routes/transactionRouter')
const transactionController = require('./controllers/transactionCtrl')
require('dotenv').config();
//connect to mongoose
mongoose.connect(process.env.MONGODB_URI).then(()=>console.log('DB connected')).catch((e)=>console.log(e))

//Cors config
const corsOptions = {
    origin:[process.env.CORS_ORIGIN]
}
app.use(cors(corsOptions))
//middlewares
app.use(express.json())
//route
app.use('/',userRouter)
app.use('/',categoryRouter)
app.use('/',transactionRouter)
//error
app.use(errorHandler)
const PORT=process.env.PORT || 8000
app.listen(PORT,()=>console.log(`Server is running on this port ${PORT}`))
