const connection = require('../database/connection')

const getAllCourse = (req,res)=>{
    let sql ='SELECT * FROM course,instructor WHERE course_instructor = instr_name  '
    connection.query(sql,function(err,result){
        if (err) throw err;
        res.send(result)
        // console.log(result[0]) 
    })
}

const getCourseDetails = (req,res)=>{
    let courseName = req.params
    console.log(courseName)
    let sqlQuery = `SELECT * FROM course,instructor WHERE course.course_name = "${courseName.course}" AND course.course_instructor = instr_name`
    connection.query(sqlQuery, (err,result) =>{
        if (err) throw err;
        res.send(result); 
        console.log(result)
    }) 
}

const getCourseContent =(req,res)=>{
    let courseName = req.params.course
    courseName = (courseName.split('-').join(''))
    if (courseName.includes(':')) {
        courseName = courseName.replace(':','')
    }
    const query = `SELECT * FROM ${courseName}`
    // console.log(req.params)
    connection.query(query,(err,result) =>{
        if (err) {
            throw err;
        }; 
        res.send(result)
    })
}

module.exports = {getAllCourse,getCourseDetails,getCourseContent}