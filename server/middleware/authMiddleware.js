const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const auth = async(req, res, next) => {
    
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token, '29630ad05c7df38698f0ada5f5893d71')
        const user = await User.findOne({ _id: data._id, 'tokens.token': token },'_id')
        if (!user) {
            throw new Error()
        }
        req.userId = user._id
        req.token = token
        next()
    } catch (error) {
        res.status(400).send({ error: 'Not authorized to access this resource' })
    }
}
const isAdMin = async(req,res,next) =>{
    try {
        const user = await User.findById(req.userId);
        if(user.rules.code>=process.env.LEVELADMIN){
            next();
        } else {
            res.status(401).send({ error: 'User is not admin' });   
        }
    } catch (error) {
        throw new Error();
    }
}
module.exports = {
    auth,
    isAdMin
}