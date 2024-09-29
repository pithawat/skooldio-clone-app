const express = require('express');
const app = express();
const connection = require('./database/connection')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const verifyjwt =require('./middleware/verifyJWT')
const credentials =require('./middleware/credentials')
const corsOption =require('./config/corsOption')

app.use(credentials)
app.use(cors(corsOption));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())



app.use('/home',require('./routes/home')) 
app.use('/login',require('./routes/login'))
app.use('/signup',require('./routes/signup'))
app.use('/logout',require('./routes/logout'))
app.use('/instructor',require('./routes/instructor'))
app.use('/classroom',require('./routes/classroom'))
app.use('/refreshtoken',require('./routes/refreshtoken'))
//protected routes
app.use(verifyjwt)
app.use('/course',require('./routes/course'))



app.listen(5000, function(){
    console.log('app listening on port 5000')
    connection.connect(function(err){
        if(err) throw err;
        console.log('connected')
    })
})

// ด้านล่างนี้คืออันที่ยังไม่ได้ใช้ express router ไม่ได้แยกไฟล์ อ่านยาก
// app.get('/home',function(req,res){
//     let sql ='SELECT * FROM course,instructor WHERE course_instructor = instr_name  '
//     connection.query(sql,function(err,result){
//         if (err) throw err;
//         res.send(result)
//         // console.log(result[0]) 
//     })
// })


// app.get('/course',function(req,res){
//     let sql ='SELECT * FROM course'
//     connection.query(sql,function(err,result){
//         if (err) throw err;
//         res.send(result)
//         // console.log(result)
//     })
// })

// app.get('/course/:name' ,function(req,res){
//     let courseName = req.params
//     console.log(courseName)
//     let sqlQuery = `SELECT * FROM course WHERE course_name = '${courseName.name}' `
//     connection.query(sqlQuery, (err,result) =>{
//         if (err) throw err;
//         res.send(result); 
//         console.log(result)
//     }) 
// })

// app.get('/instructor/:name',function(req,res){
//     let instructorName = req.params
//     let sqlQuery = `SELECT * FROM instructor WHERE english_name = '${instructorName.name}' `
//     connection.query(sqlQuery,(err,result) =>{
//         if (err) throw err;
//         // console.log(result)
//         res.send(result)
//     })
// })

// app.post('/signup',function(req,res){
//     let user = req.body
//     // console.log(user.username)
//     connection.query(`SELECT username from user WHERE user.username = '${user.username}' `,(err,result) =>{
//         if (result.length > 0){
//             res.send({status:'username is duplicate'})
//         }
//         else {
//             try{
//             const query = `INSERT INTO user(firstname,lastname,username,password) VALUES('${user.firstname}','${user.lastname}','${user.username}','${user.password}')`
//                 connection.query(query,(err,result) =>{
//                     if (err) throw err;
//                     res.send({status:'register success'})    
//                 })
//             }catch(err){
//                 console.log(err)
//             } 
//         }
//     })
//     // console.log(allUser)

//     // console.log(allUser)
//     // let query = `INSERT INTO user(firstname,lastname,username,password) VALUES('${user.firstname}','${user.lastname}','${user.username}','${user.password}')`
//     // connection.query(query,(err,result)=>{
//     //     if (err) throw err;
//     //     res.send(result)
//     // })
// })

// const verifyjwt = (req,res,next)=>{
//     console.log(req.body)
//     const token = req.body['access-token']
//     // const token = req.headers['access-token'];
//     if (!token){
//         return res.json("we need token please provide it for next time")
//     }
//     else{
//         jwt.verify(token,"jwtSecretKey",(err,decoded)=>{
//             if(err){
//                 console.log(err)

//                 res.json("Not Authenticated",err)
//             }
//             else{
//                 // req.userid =decoded.id;
//                 next()
//             }
//         })
//     }
// }

// app.post('/checkauth',verifyjwt,(req,res)=>{
//     return res.json('Authenticated')
// })

// app.use('/login',function(req,res){
//     console.log(req.body)
//     let query = `select * from user where '${req.body.username}' = user.username and '${req.body.password}' = user.password`
//     connection.query(query,(err,result)=>{
//         if (err) throw err;

//         // if not have username and password in db   
//         if (result.length < 1 ){
//             res.send({status:'incorrect username or password'})
//         }
//         else{
//             console.log(result[0].id)
//             const id = result[0].id
//             const token = jwt.sign({id},'jwtSecretKey',{expiresIn:'15m'})
//             res.send({token}) 
//         }
//         //  console.log(result[0].username) 
//     })
// })

// app.get('/classroom/:course',function(req,res){
//     let courseName = req.params.course
//     courseName = (courseName.split('-').join(''))
//     if (courseName.includes(':')) {
//         courseName = courseName.replace(':','')
//     }
//     const query = `SELECT * FROM ${courseName}`
//     // console.log(req.params)
//     connection.query(query,(err,result) =>{
//         if (err) {
//             throw err;
//         }; 
//         res.send(result)
//     })
// })
    



