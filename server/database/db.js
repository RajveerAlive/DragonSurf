import mongoose from 'mongoose';



const Connection = async (username,password) => {
    const URL =`mongodb://${username}:${password}@ac-vs9oomh-shard-00-00.undbgrx.mongodb.net:27017,ac-vs9oomh-shard-00-01.undbgrx.mongodb.net:27017,ac-vs9oomh-shard-00-02.undbgrx.mongodb.net:27017/?ssl=true&replicaSet=atlas-13p2yc-shard-0&authSource=admin&retryWrites=true&w=majority
`
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;
