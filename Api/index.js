const express = require ("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();


const port = process.env.PORT || 5100;

app.use(express.json());
app.use(cors())

const connect = ()=>{
    return mongoose.connect(
        "mongodb+srv://prashant:prashant_123@cluster0.t0p0k.mongodb.net/Phone?retryWrites=true&w=majority"
    );
};

const mobileSchema = new mongoose.Schema(
    {
      image: { type: String, required: true },
      description: { type: String, required: true },
      price: { type: Number, required: true },
      color:{type:Number,required:true}
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  
const mobile = new mongoose.model("mobile",mobileSchema)


  app.get("/mobile", async (req, res) => {
    try {
      const cards = await mobile.find({}).select({});
      return res.status(200).send(cards);
    } catch (err) {
      return res.status(401).send({ message: err.message });
    }
  });
 
  
  app.listen(port, async () => {
      try {
        await connect();
        console.log("Listening on port 5100");
      } catch (error) {
        console.log(error);
      }
    });
  
  