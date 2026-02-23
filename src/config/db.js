import mongoose from "mongoose";

export async function connectDB(uri){
    try{
        await mongoose.connect(uri)
        console.log("Conectado a MongoDB")
    }catch(error){
        console.error("Error en la conexion a Mongo: ", error.message)
        process.exit(1)
    }
}