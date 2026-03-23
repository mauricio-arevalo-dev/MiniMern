import mongoose from "mongoose"
import { timeStamp } from "node:console"
import { title } from "node:process"

const taskShema = new mongoose.Schema(
    {
        title: { type: String, required:true, trim: true},
        done:{ type: Boolean, default: false}
    },
    {
        timestamps:true
    }    
)

export default mongoose.model("Task", taskShema)