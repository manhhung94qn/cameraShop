const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const MRulesSchema = new Schema({
    code: {
        type: Number,
        unique: true,
        min: 1,
        max: 100
    },
    name : {
        type: String,
        default: "Member"
    }
},{
    autoIndex: false,
    autoCreate: false,
    collection: 'MRules'
})

const MRules = mongoose.model('MRules',MRulesSchema);

MRules.init(async ()=>{
    if(await MRules.exists({code:1})) return;
    let rulesBasic = new MRules({
        code: 1,
        name: 'Member'
    });
    try {
        await rulesBasic.save();
        console.log('Init Rules Basic Success!');
    } catch (error) {
        console.log(error);        
    }
})

module.exports = MRules

