import mongoose from "mongoose";
const { Schema } = mongoose

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        validate: {
            validator: async (value) => {
                let matched = await mongoose.models.User.findOne({ email: value });
                if (matched) {
                    return false;
                }
            },
            message: "email already used",
        },


    },
    username: {
        type: String
    },

    password: {
        type: String,
        required: true
    },
   address:{
    type:String,
    required:true
   },
    role: {
        type: String,
        enum: ["admin", "buyer", "seller", "superadmin"],
        default: "buyer"
    }


})




const User = mongoose.model("User", userSchema)




export default User