const express=require('express')
const userRouter=require('./routes/userRouter')
const mongoose=require('mongoose')
const cors=require('cors')
const errorHandler=require('./middlewares/errorHandlerMiddleware')
const app=express()
const categoryRouter=require('./routes/categoryRouter')
const transactionRouter=require('./routes/transactionRouter')
const transactionController = require('./controllers/transactionCtrl')
//connect to mongoose
mongoose.connect('mongodb+srv://sameerkumar0635:2pI7mYkvfdDcJPY6@cluster0.wplla5l.mongodb.net/mern-expenses').then(()=>console.log('DB connected')).catch((e)=>console.log(e))

//Cors config
const corsOptions = {
    origin:['http://localhost:5173']
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
