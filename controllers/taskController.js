const taskModel = require("../models/Task");

const insertTask = (req,res)=>{
    const{title,description}= req.body;
    const saveEnquiry = new taskModel({
        title,
        description
    });
    saveEnquiry.save().then(()=>{
    res.send({status:1, message:"Task inserted"});

    }).catch((err)=>{
        res.send({status:0,message:"got error", error:err});
    })
}
const showData=async(req,res)=>{
    const dataList = await taskModel.find();
    res.send({status:1,enqList:dataList});
}

const delData =async(req,res)=>{
    const dId= req.params.id;
    const deleteData = await taskModel.deleteOne({_id:dId});
    res.send({status:1,deleteData});

}

const upDate= async(req,res)=>{
    uID = req.params.id;
    const {title,description} =req.body;
    await taskModel.updateOne(
        {_id:uID},
        {$set:{title,description}}
    )
res.send({status:1, message:"Data updated"});
}
module.exports = {insertTask,showData,delData,upDate};