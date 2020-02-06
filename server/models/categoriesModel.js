const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const CategorySchema = new Schema({
    titles: {
        type: String,
        required: true
    },
    content: String,
    description: String,
    listSeries: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Series'
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
    collection: 'Category'
})

const Category = mongoose.model('Category',CategorySchema);

module.exports = Category

