const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const MRules = require('./master/mRulesModel');
let Schema = mongoose.Schema;
const HOST = process.env.HOST;
const PORT = process.env.PORT;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: false
    },
    username: {
        type: String,
        lowercase: true,
        required: true
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({ error: 'Invalid Email address' })
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    gender: {
        code: {
            type: Number,
            default: 3
        }
    },
    birthday: {
        type: Date
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    avatar: {
        type: String,
        default: '79bc966c53a22b2901e7d3513116dca0.png'
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    rules: {
        rulesId: Schema.Types.ObjectId,
        code: {
            type: Number,
            default: 1
        },
        name: {
            type: String,
            default: 'Member'
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    productHistory: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                required: true
            },
            productTitle: {
                title: String
            },
            productDesciption: {
                type: String
            },
            productAvatar : {
                type: String
            }
        }
    ],
    address: [
        {
            cityId: String,
            cityName: String,
            districtId: String,
            districtName: String,
            wardId: String,
            wardName: String,
            detail: String,
            default: Boolean
        }
    ]
}, {
    autoIndex: false,
    autoCreate: false,
    collection: 'User'
})

userSchema.virtual('fullUrlAvatar').get(function () {
    return HOST + ':' + PORT + '/icons/avatars/' + (this.avatar || '79bc966c53a22b2901e7d3513116dca0.png')
})

userSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    if (user.isNew) {
        let rulesMember = await MRules.findOne({
            code: 1
        });
        user.rules.code = rulesMember.code;
        user.rules.name = rulesMember.name;
        user.rules.rulesId = rulesMember._id;
    }
    if (user.isModified('rules') && !user.isNew) {
        let rulesMember = await MRules.findOne({
            code: user.rules.code || 1,
        });
        user.rules.code = rulesMember.code;
        user.rules.name = rulesMember.name;
        user.rules.rulesId = rulesMember._id;
    }
    next()
})


userSchema.methods.generateAuthToken = async function () {
    // Generate an auth token for the user
    const user = this;
    const token = jwt.sign({ _id: user._id }, '29630ad05c7df38698f0ada5f5893d71')
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

userSchema.statics.findByCredentials = async (username, password) => {
    // Search for a user by username and password.
    username = username.toLowerCase();
    const user = await User.findOne({$or: [{email: username},{username}]});
    if (!user) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    return user
}

const User = mongoose.model('User', userSchema,'User');


module.exports = User