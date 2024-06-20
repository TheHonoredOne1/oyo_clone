import mongoose from "mongoose";

const URI = "mongodb+srv://devilldaddy666666:ausApVQtVnyj6IPE@cluster0.puogs6g.mongodb.net/oyo_clone";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database Connected...")
}

export default connectDB;

// ausApVQtVnyj6IPE
// mongodb+srv://devilldaddy666666:ausApVQtVnyj6IPE@cluster0.puogs6g.mongodb.net/