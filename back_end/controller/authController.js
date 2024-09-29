const connection = require('../database/connection')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const handleLogin = (req,res,) =>{
    const {user,pwd} = req.body
    console.log(user,pwd)
    connection.query(`SELECT * FROM user WHERE '${user}' = username AND '${pwd}' = password`,(err,result)=>{
        const valid = result.length
        console.log(result)
        if(valid){
            const accessToken = jwt.sign(
                {username:user},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:'15s'}
            )
            const refreshToken = jwt.sign(
                {username:user},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn:'1d'}
            )
        
            res.cookie('jwt',refreshToken,{httpOnly:true,sameSite:'None',secure:true,maxAge:24*60*60*1000})
            res.send({message:`user ${result.username} has logged in already`,token:accessToken})
         }
         else{
            res.status(401).json('Invalid username or password')
        }
    });
}
module.exports = {handleLogin}