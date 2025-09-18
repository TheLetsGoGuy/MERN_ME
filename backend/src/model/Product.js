const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    pname:{
        type: String,
        require:true
    },
    pdes:{
        type: String,
        require:true
    },
    pprice:{
        type: String,
        require:true
    },
    pimage:{
        type:String,
        require:true
    }
},{
    timestamps:true
}
)
const Product = mongoose.model("product",productSchema)
module.exports = Product