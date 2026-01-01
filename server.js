const express = require("express")
const authRouter = require("./router/authRoute")


const app = express()


// ** MIDDLEWARE
app.use(express.json())

// ** CUSTOM MIDDLEWARE

// ** ROUTERS
app.use("/api/v1", authRouter)


app.listen(4000, () => {
    console.log("server started!")
})
