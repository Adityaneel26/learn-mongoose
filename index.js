const mongoose= require("mongoose")
//////////////////////////Connect to Mongodb////////////////////////////
main()
.then(()=>{
    console.log("connectino successfully")
})
.catch((err) => console.log(err));

async function main() {
    
    await mongoose.connect("mongodb://127.0.0.1:27017/test")
}

//////////////////////////////MODEL AND SCHEMA //////////////////////////////////
const userSchema = new mongoose.Schema({
    name:String
    ,email:String,
    age:Number
})

const User=mongoose.model("User",userSchema)

////////////////////////////////////////// INSERT FOR MANY ///////////////////////////////
// User.insertMany([
//     {name:"rohit",email:"ro@gmail.com",age:38}
//     ,{name:"rishi",email:"ri@gmail.com",age:48}
//     ,{name:"yash",email:"ya@gmail.com",age:58}
// ]).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })


/////////////////////////////////////////// INSERT ONE ////////////////////////////////////
// const user1=new User({name:"Aditya",email:"adi@gmail.com",age:49})
// // const user2=new User({name:"yash",email:"yash@gmail.com",age:39})
// user1.save().then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{
//     console.log("error occur    ")
// })


////////////////////////////////////// FIND /////////////////////////////////   
// User.findOne({age:{$gte:39}}).limit(1).then((data)=>{ //we can also do like thiss
// User.find({}).then((data)=>{
// // User.find({age:{$gte:39}}).limit(1).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err)
// })

////////////////////////////////update ///////////////////////////////////////
// User.updateOne({name:"yash"},{age:10}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err)
// })

// User.updateMany({age:{$gt :48}},{age:39}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err)
// })

// User.findOneAndUpdate({name:"yash"},{age:10},{new :true}).then((data)=>{//the findOneAndUpdate use for print updated document
    // console.log(data);
// }).catch((err)=>{
    // console.log(err)
// })

//////////////////////////////////////////DELETE //////////////////////////////////
// User.deleteOne({name:'rishi'}).then((res)=>{
//     console.log(res)
// })
// User.deleteMany({name:'rishi'}).then((res)=>{
//     console.log(res)
// })
// User.findByIdAndDelete("id").then((res)=>{
//     console.log(res)

// })
