function BaseResul(){

}

BaseResul.prototype.success = function(res,data,count=1,page=1){
    let rs = {
        data,
        metaData : {
            count,
            page,
        }
    }
    res.status(200).send(rs)
}

module.exports = BaseResul;