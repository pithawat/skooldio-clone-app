const connection = require('../database/connection')

const signUp = (req,res)=>{
    let user = req.body
    console.log(user.username)
    connection.query(`SELECT username from user WHERE user.username = '${user.username}' `,(err,result) =>{
        if (result.length > 0){
            res.send({status:'username is duplicate'})
        }
        else {
            try{
            const query = `INSERT INTO user(firstname,lastname,username,password) VALUES('${user.firstname}','${user.lastname}','${user.username}','${user.password}')`
                connection.query(query,(err,result) =>{
                    if (err) throw err;
                    res.send({status:'register success'})    
                })
            }catch(err){
                console.log(err)
            } 
        }
    })
}
module.exports = {signUp}