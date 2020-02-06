const mongoose = require('mongoose')
//mongodb+srv://hung:120516@cluster0-ltq3c.gcp.mongodb.net/test?retryWrites=true&w=majority
//process.env.MONGODB_URL
mongoose.connect('mongodb+srv://hung:120516@cluster0-ltq3c.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}).then(
    ()=>{
        console.log("Connect to db success")
    },
    (er)=>{
        console.log(er)
    }
);