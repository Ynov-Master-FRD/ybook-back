import  express  from "express";
import { Request, Response } from "express";

const HelloRoute = express.Router();

HelloRoute.get('/world', (req,res,next)=>{
    res.json({message: "Hello World!"});
})

HelloRoute.get('/world/:name', (req,res,next)=>{
    res.json({message: `Hello ${req.params.name}!`});
})

export default HelloRoute;
