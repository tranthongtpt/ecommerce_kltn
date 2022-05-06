import  express  from 'express'
import asyncHandler from 'express-async-handler'
import {admin, protect} from '../AuthMiddleware/AuthMiddleware.js'
import Product from '../models/ProductModel.js'

const productsRoute = express.Router()

//all product
productsRoute.get("/",asyncHandler(
    async(req, res) =>{
        const pageSize = 6
        const page = Number(req.query.pageNumber) || 1
        const keyword = req.query.keyword ? {
            name: {
                $regex: req.query.keyword,
                $options: "i",
            },
        }
        : {}
        const count = await Product.countDocuments({...keyword})
        const products = await Product.find({...keyword})
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .sort({_id: -1})
        res.json({products, page, pages:Math.ceil(count / pageSize)})
    }
))
//admin get all product
productsRoute.get("/all",protect,admin,asyncHandler(async(req,res) => {
    const pageSize = 8
    const page = Number(req.query.pageNumber) || 1
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: "i",
        },
    }
    : {}
    const count = await Product.countDocuments({...keyword})
    const products = await Product.find({...keyword})
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .sort({_id: -1})
        res.json({products, page, pages:Math.ceil(count / pageSize)})
}))

//single product
productsRoute.get("/:id",asyncHandler(
    async(req, res) =>{
        const product = await Product.findById(req.params.id)
        if(product){
            res.json(product)
        }else{
            res.status(400)
            throw new Error("product not found")
        }
    }
))

//product review
productsRoute.post("/:id/review",protect,asyncHandler(
    async(req, res) =>{
        const {rating, comment} = req.body
        const product = await Product.findById(req.params.id)
        if(product){
            const alreadyReviewed = product.reviews.find((r) => r.user.toString() === req.user._id.toString())
            if(alreadyReviewed){
                res.status(400)
                throw new Error("Product already Reviewed")
            }
            const review = {
                name: req.user.name,
                rating: Number(rating),
                comment,
                user: req.user.id
            }

            product.reviews.push(review)
            product.numReviews = product.reviews.length
            product.rating = 
                product.reviews.reduce((acc, item) => item.rating + acc, 0) /
                product.reviews.length
            
                await product.save()
            res.status(201).json({message: "Reviewed Added"})
        }else{
            res.status(400)
            throw new Error("product not found")
        }
    }
))

//delete product
productsRoute.delete("/:id",protect,admin,asyncHandler(
    async(req, res) =>{
        const product = await Product.findById(req.params.id)
        if(product){
            await product.remove()
            res.json({message:"Product deleted"})
        }else{
            res.status(400)
            throw new Error("product not found")
        }
    }
))

//create product
productsRoute.post("/",protect,admin,asyncHandler(
    async(req, res) =>{
        const {name, price, description,caterogy , image, countInStocks} = req.body
        const productExists = await Product.findOne({name})
        if(productExists){
            res.status(400)
            throw new Error("Product is already exists")
        }else{
            const product = new Product({
                name, price, description,caterogy, image, countInStocks, user: req.user._id
            })
            if (product){
                const createdProduct = await product.save()
                res.status(201).json(createdProduct)
            }else{
                res.status(400)
                throw new Error("Invalid product")
            }
            
        }
    }
))

//edit product
productsRoute.put("/:id",protect,admin,asyncHandler(
    async(req, res) =>{
        const {name, price, description,caterogy , image, countInStocks} = req.body
        const product = await Product.findById(req.params.id)
        if(product){
            product.name=name || product.name
            product.price=price || product.price
            product.description=description || product.description
            product.caterogy=caterogy || product.caterogy
            product.image=image || product.image
            product.countInStocks=countInStocks || product.countInStocks

            const updatedProduct = await product.save()
            res.json(updatedProduct)
        }else{
            res.status(400)
            throw new Error("product not found")
            
        }
    }
))

export default productsRoute