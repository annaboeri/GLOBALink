const   
    jwt = require('jsonwebtoken'),
    User = require('./models/User.js'),
    { JWT_SECRET } = process.env

// function for creating tokens
function signToken(user) {
    const userData = user.toObject()
    delete userData.password
    return jwt.sign(userData, JWT_SECRET)
}

// function for verifying tokens
function verifyToken(req, res, next) {
    // grabs token from either headers, req.body, or query string
    const token = req.get('token') || req.body.token || req.query.token
    if(!token) return res.json({ success: false, message: "No token provided"})
    jwt.verify(token, JWT_SECRET, (err, decodedData) => {
        // if problem with token verification, deny access
        if(err) return res.json({ success: false, message: "Invalid token"})
        // otherwise, search for user by id that was embedded in token and add user to req object
        User.findById(decodedData._id, (err, user) => {
            if (!user) return res.json({ success: false, message: "Invalid token"})
            req.user = user
            next()
        })
    })
}

module.exports = {
    signToken,
    verifyToken
}
