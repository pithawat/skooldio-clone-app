const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleRefreshToken = (req,res)=>{
    const cookies =req.cookies
    if(!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err,decode)=>{
            if (err) return res.sendStatus(403)
            const accessToken = jwt.sign(
                {username:decode.username},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:'30s'}
            )
            res.send({accessToken})
        }
    )
}
module.exports = {handleRefreshToken};