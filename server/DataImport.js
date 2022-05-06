import  express  from "express";
import products from "./data/Products.js";
import users from "./data/User.js";
import Product from "./models/ProductModel.js";
import User from './models/UserModel.js'
import asyncHandler from 'express-async-handler'
import Category from "./models/CategoryModel.js";
import caterogy from "./data/Category.js";

const ImportData = express.Router()

ImportData.post("/user", asyncHandler(
    async (req, res)=>{
        await User.remove({})
        const importUser = await User.insertMany(users)
        res.send({importUser})
    }
))

ImportData.post("/products", asyncHandler(
    async (req, res)=>{
        await Product.remove({})
        const importProducts = await Product.insertMany(products)
        res.send({importProducts})
    }
))

ImportData.post("/caterogy", asyncHandler(
    async (req, res)=>{
        await Category.remove({})
        const importCaterogy = await Category.insertMany(caterogy)
        res.send({importCaterogy})
    }
))

export default ImportData