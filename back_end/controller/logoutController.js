const handleLogout = (req,res) =>{
    res.clearCookie('jwt',{httpOnly:true,sameSite:'None',secure:true});
    res.sendStatus(204)
}
module.exports = {handleLogout}