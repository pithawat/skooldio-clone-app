const allowOrigins = require('./allowOrigin')

const corsOptions = {
    origin:(origin,callback) =>{
        if(allowOrigins.indexOf(origin) !== -1 || !origin){
            callback(null,true)
        }else{
            callback(new Error('not allow by CORS'))
        }
    },
    optionSuccessStatus:200
}
module.exports = corsOptions