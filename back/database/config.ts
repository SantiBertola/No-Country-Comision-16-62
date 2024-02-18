import mongoose from "mongoose";

export const connectDB = async () : Promise <void> => {
    
    try {
        const dbURL = process.env.URL;
        if (!dbURL){
            throw new Error ("Chequeá la URL de la Base de Datos en la variable de entorno")
        }
        
        await mongoose.connect(dbURL)
        console.log("Conectado a la Base de Datos")

    } catch (error) {
        console.log(error)
        throw new Error("Error al iniciar la Base de Datos")
    }
}