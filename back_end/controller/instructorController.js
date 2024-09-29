const connection = require('../database/connection')

const getInstructorDetails = (req,res)=>{
    let instructorName = req.params
    let sqlQuery = `SELECT * FROM instructor WHERE english_name = '${instructorName.name}' `
    connection.query(sqlQuery,(err,result) =>{
        if (err) throw err;
        // console.log(result)
        res.send(result)
    });
}

module.exports = {getInstructorDetails}