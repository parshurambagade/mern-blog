import mongoose from "mongoose";

export default async function connectMongo() {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('Connected to the mongodb');
        }); 
    }catch(err){
        console.error(err);
    }
}