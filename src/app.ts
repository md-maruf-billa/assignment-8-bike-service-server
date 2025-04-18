import express from 'express';
import manageResponse from './app/shared/manageResponse';
const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    manageResponse(res, {
        success: true,
        statusCode: 200,
        message: "Server is working fine...!!"
    })
})




export default app;