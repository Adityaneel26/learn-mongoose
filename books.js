const mongoose= require("mongoose")

main()
.then(()=>{
    console.log("connectino successfully")
})
.catch((err) => console.log(err));

async function main() {
    
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon")
}

//////////////////////////////MODEL AND SCHEMA //////////////////////////////////
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    author:{
        type:String
    },
    price:{
        type:Number
    },
    discount:{
        type:Number,
        default:0
    }
})

const Book=mongoose.model("Book",bookSchema)

let book1=new Book({
    title:"disaster",
    author:"hello world"
    ,price:120
})

book1.save().then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

