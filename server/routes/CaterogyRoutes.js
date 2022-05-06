import  express  from 'express'
import asyncHandler from 'express-async-handler'
import { admin, protect } from '../AuthMiddleware/AuthMiddleware.js'
import Category from '../models/CategoryModel.js'

const caterogyRoute = express.Router()

//list category
caterogyRoute.get("/",asyncHandler(
    async(req, res) =>{
        const caterogy = await Category.find({})
        res.json(caterogy)
    }
))

//admin create caterogy

caterogyRoute.get("/all",protect,admin,asyncHandler(
    async(req, res) =>{
        const caterogy = await Category.find({})
        res.json(caterogy)
    }
))




//delete caterogy
caterogyRoute.delete("/:id", protect, admin,asyncHandler(
    async(req, res) =>{
        const caterogy = await Category.findById(req.params.id)
        if(caterogy){
            await caterogy.remove()
            res.json({message: "category deleted"})
        }else{
            res.status(400)
            throw new Error("category not found")
        }
    }
))

//create caterogy
caterogyRoute.post("/", protect, admin,asyncHandler(
    async(req, res) =>{
        const{name,image} = req.body
        const caterogyExists = await Category.findOne({name})
        if(caterogyExists){
            res.json(400)
            throw new Error("category already exists")
        }else{
            const caterogy = new Category({
                name,image,user:req.user._id
            })
            if(caterogy){
                const createCategory = await caterogy.save()
                res.status(201).json(createCategory)
            }else{
                res.status(400)
                throw new Error("invalid category")
            }
        }
    }
))

//edit caterogy
caterogyRoute.put("/:id", protect, admin,asyncHandler(
    async(req, res) =>{
        const{name,image} = req.body
        const caterogy = await Category.findById(req.params.id)
        if(caterogy){
            caterogy.name = name || caterogy.name,
            caterogy.image = image || caterogy.image

            const updatedCategory = await caterogy.save()
                res.json(updatedCategory)
        }else{
            
                res.status(400)
                throw new Error("invalid category")
        }
    }
))

export default caterogyRoute