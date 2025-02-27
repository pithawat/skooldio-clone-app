const jwt = require('jsonwebtoken')

const verifyjwt = (req,res,next) =>{
    const authHeader = req?.headers['authorization']
    if(!authHeader){return res.sendStatus(401)}
    console.log(authHeader)
    const token =authHeader.split(' ')[1]
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err,decode)=>{
            if (err) return res.sendStatus(403)
            next()
        }
    )
}

module.exports = verifyjwt