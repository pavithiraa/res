import dbConnect from '../../../util/mongo'
import Product from '../../../models/Product'

export default async function handler(req, res) {
   const {method,
query:{ id },
cookies
} = req;
const token = cookies.token

  dbConnect()

   if(method === "GET"){
     try{
         const product = await  Product.findById(id);
         res. status(200).json(product);
     }catch(err){
        res.status(500).json(err);
     }
   }
   if(method === "PUT"){
    if(!token || token !== process.env.TOKEN){
      return res.status(401).json("Not authenticated!")
    }
     try{
        const product = await Product.findByIdAndUpdate(id,req.body,{
          new: true,
        });
        // console.log(req.body);
      res.status(200).json(product);
     }catch (err){
            res.status(500).json(err)
     }

   }

   if(method === "DELETE"){
    if(!token || token !== process.env.TOKEN){
      return res.status(401).json("Not authenticated!")
    }
    try{
     await Product.findByIdAndDelete(id);
      //  console.log(req.body);
     res.status(200).json("The Product has been deleted");
    }catch (err){
           res.status(500).json(err)
    }

  }
  }
  