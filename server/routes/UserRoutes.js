import  express  from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/UserModel.js'
import generateToken from '../utils/gererateToken.js'
import {protect, admin} from '../AuthMiddleware/AuthMiddleware.js'

const userRouter = express.Router()

//Login
userRouter.post("/login",asyncHandler(
    async(req, res) =>{
        const {email, password} = req.body
        const user = await User.findOne({email})

        if(user && (await user.matchPassword(password))){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
                createdAt: user.createdAt,
            })
        }else{
            res.status(401)
            throw new Error("Invalid Email or password")
        }
    }
))

//register
userRouter.post("/register",asyncHandler(
    async(req, res) =>{
        const {name,email,password} = req.body
        const userExists = await User.findOne({email})
        if(userExists){
            res.status(400)
            throw new Error("user already exists")
        }
        const user = await User.create({
            name,
            email,
            password
        })
        if(user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            })
        }else{
            res.status(400)
            throw new Error("invalid user data")
        }
    }
))

//profile
userRouter.get("/profile",
  protect,
  asyncHandler(
    async(req, res) =>{
        const user = await User.findById(req.user._id)
        if (user){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
            })
        }else{
            res.status(401)
            throw new Error("user not found")
        }
    }
))

//update profile
userRouter.put("/profile",
  protect,
  asyncHandler(
    async(req, res) =>{
        const user = await User.findById(req.user._id)
        if (user){
            user.name = req.body.name || user.name
            user.email = req.body.email || user.email
            if(req.body.password){
                user.password = req.body.password
            }
            const updatedUSer = await user.save()
            res.json({
                _id: updatedUSer._id,
                name: updatedUSer.name,
                email: updatedUSer.email,
                isAdmin: updatedUSer.isAdmin,
                createdAt: updatedUSer.createdAt,
                token: generateToken(updatedUSer._id)
            })
        }else{
            res.status(401)
            throw new Error("user not found")
        }
    }
))

//get all user

userRouter.get(
    "/",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const keyword = req.query.keyword ? {
            name: {
                $regex: req.query.keyword,
                $options: "i",
            },
        }
        : {}
        const users = await User.find({...keyword})
        res.json(users)
    })
)
export default userRouter