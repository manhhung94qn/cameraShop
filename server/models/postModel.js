const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String
    },
    tags: [
        {
            type: String
        }
    ],
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    series: {
        seriesId: Schema.Types.ObjectId,
        title: String
    },
    keySearch: {
        type: String,
        lowercase: true
    },
    view: {
        type: Number
    },
    rateList: [{
        reteBy: Schema.Types.ObjectId,
        ratePoint:{
            type: Number,
            max: 10,
            min: 0
        }
    }],
    comments: [
        {
            commentContent: {
                type: String,
                trim: true
            },
            commentById: Schema.Types.ObjectId,
            commentByName: {
                type: String
            },
            status: {
                type: String,
                default: process.env.STATUS_ACTIVE,
                uppercase: true,
                trim: true
            },
            listLike: [
                {
                    likeById: Schema.Types.ObjectId,
                    likeByName: String
                }
            ],
            subComment: [
                {
                    subCommentContent: {
                        type: String,
                        trim: true
                    },
                    subCommentById: Schema.Types.ObjectId,
                    commentByName: {
                        type: String
                    },
                    subStatus: {
                        type: String,
                        default: process.env.STATUS_ACTIVE,
                        uppercase: true,
                        trim: true
                    },
                    subListLike: [
                        {
                            likeById: Schema.Types.ObjectId,
                            likeByName: String
                        }
                    ],
                }
            ]
        }
    ]
},{
    collection: 'Post'
})


const Post = mongoose.model('Post',PostSchema,'Post');

module.exports = Post
