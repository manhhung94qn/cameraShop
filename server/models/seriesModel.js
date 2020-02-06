const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const SeriesSchema = new Schema({
    titles: {
        type: String,
        required: true
    },
    userInfo: {
        userId: Schema.Types.ObjectId,
        nickname: String
    },
    content: String,
    description: String,
    listPost: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
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
    collection: 'Series'
})

const Series = mongoose.model('Series',SeriesSchema);

module.exports = Series

