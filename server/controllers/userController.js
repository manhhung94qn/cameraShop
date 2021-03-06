const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const auth = require('../middleware/authMiddleware');


const createNewUser = async (req,res)=>{
    try {
        if(await User.exists({
            $or: [{email: req.body.email.toLowerCase()},{username: req.body.username.toLowerCase()}]
        })){
            throw "Email or Username or Nickname is already exists";
        }
        const user = new User(req.body);
        
        await user.save();
        const token = await user.generateAuthToken();
        
        res.status(201).send({ _id: user._id, username: user.username, token});
    } catch (error) {
        res.status(400).send(error);
    }
}

//User login
const userLogin = async (req,res) => {
    try {
        const { username,password } = req.body;
        const user = await User.findByCredentials(username, password);
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'});
        }
        const token = await user.generateAuthToken();
        let id = user._id;
        res.send({ token, id });
    } catch (error) {
        res.status(400).send(error);
    }
}

//Get infor user 
const userInfor = async (req,res) => {
    let user = await User.findOne({
        _id: req.userId
    });
    if(!user) res.status(400).send({
        success: false,
        error: "Người dùng không tồn tại"
    });
    user = user.toObject({
        virtuals: true
    });
    let {fullName,fullUrlAvatar,email,gender,nickname,_id,name} = user;
    let baseResult = new BaseResult();
    baseResult.success(res,{
        _id,
        nickname : nickname||name.first,
        fullName,
        fullUrlAvatar,
        email,
        gender        
    })
}

const  changeInfor = async (req,res) => {
    res.send("Is watting...")
}

// Change password user by user
const changePassword = async (req,res) => {
    try {
        const {email, password,newPassword,confirmNewPassword} = req.body;
        if(newPassword != confirmNewPassword){
            return res.status(401).send({error: 'New passwords do not glare at each other'});
        }
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        user.password = newPassword;
        user.tokens.splice(0, user.tokens.length);
        let token = await user.generateAuthToken();
        user.save();
        let id = user._id;
        res.send({token,id})
    } catch (error) {
        res.status(400).send(error);        
    }
}

//User logout
const userLogout = async (req,res)=>{
    if(req.params.type){
        // Login all device
        userLogoutAll(req,res);
    } else {
        // Logout in this device
        userLogoutInThisDevice(req,res);
    }
}

// Logout in this device
const userLogoutInThisDevice = async (req,res)=>{
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
}

// Logout in all device
const userLogoutAll = async (req,res) => {
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
}


//Router link
router
    .route('/')
    .post(createNewUser);

router
    .route('/me')
    .post(userLogin)
    .get(auth.auth,userInfor)
    .patch(changePassword)
    .put(changeInfor);

router
    .route('/logout/:type?')
    .get(userLogout);

router
    .route('/test')
    .get((req,res)=>{
        res.send('OKI test')
    })
//router.get('/user_list', listUser);

module.exports = router;

