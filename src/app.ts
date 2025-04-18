import express from 'express';
import manageResponse from './app/shared/manageResponse';
import appRouter from './route';
import globalErrorHandler from './app/shared/globalErrorHandler';
const app = express()

app.use(express.json())
app.use('/api', appRouter)

app.get('/', (req, res) => {
    manageResponse(res, {
        success: true,
        statusCode: 200,
        message: "Server is working fine...!!"
    })
})


app.use(globalErrorHandler)

export default app;