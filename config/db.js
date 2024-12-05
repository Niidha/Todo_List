const mongoose=require("mongoose")
const connectDB=async()=>{
try{
    const {connection}=await mongoose.connect('mongodb://127.0.0.1:27017',{
        dbName:"Sample_1"
    })
    console.log("Connected DB",connection.db.databaseName);
}
catch(err){
console.log(err);

}
}
module.exports={connectDB}