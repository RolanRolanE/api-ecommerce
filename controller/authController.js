

const RegisterUser = (req, res) => {
    return res.send("register")
}

const loginUser = (req, res) => {
    return res.send("login")
}


module.exports = { RegisterUser, loginUser }