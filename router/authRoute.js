const express = require("express")
const { RegisterUser, loginUser } = require("../controller/authController")

const router = express.Router()

// ** POST register
router.post("/register", RegisterUser)


// ** POST login
router.post("/login", loginUser)




module.exports = router