import  express  from 'express'
import asyncHandler from 'express-async-handler'
import {admin, protect} from '../AuthMiddleware/AuthMiddleware.js'
import Order from "./../models/OrderModel.js"

const orderRouter = express.Router()

// create order
orderRouter.post(
    "/",protect,
    asyncHandler(async (req, res) => {
        const {
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        } = req.body
        if(orderItems && orderItems.length === 0) {
            res.status(400)
            throw new Error("no order")
            return
        }else{
           const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
            })
            const createOrder = await order.save()
            res.status(201).json(createOrder)
        }
    })
)
// admin get all order
orderRouter.get(
    "/all/",protect,admin,
    asyncHandler(async (req, res) => {
        const keyword = req.query.keyword ? {
            name: {
                $regex: req.query.keyword,
                $options: "i",
            },
        }
        : {}
        const orders = await Order.find({...keyword}).sort({_id: -1}).populate("user", "id name email")
        res.json(orders)
    })
)

// get order id
orderRouter.get(
    "/:id",protect,
    asyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id).populate(
            "user",
            "name email"
        )
        if(order) {
            res.json(order)
        }else{
            res.status(401)
            throw new Error("order not found")
        }
    })
)

// oder is paid
orderRouter.put(
    "/:id/pay",protect,
    asyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id)
        if(order) {
            order.isPaid = true
            order.paidAt = Date.now()
            order.paymentResult = {
                id: req.body.id,
                status: req.body.status,
                update_time: req.body.update_time,
                email_address: req.body.email_address
            }
        const updatedOrder = await order.save()
        res.json(updatedOrder)
        }else{
            res.status(401)
            throw new Error("order not found")
        }
    })
)

// oder id delivered
orderRouter.put(
    "/:id/delivered",protect,
    asyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id)
        if(order) {
            order.isDelivered = true
            order.deliveredAt = Date.now()
        const updatedOrder = await order.save()
        res.json(updatedOrder)
        }else{
            res.status(401)
            throw new Error("order not found")
        }
    })
)


// user login order
orderRouter.get(
    "/",protect,
    asyncHandler(async (req, res) => {
        const order = await Order.find({user: req.user._id}).sort({_id: -1})
        res.json(order)
    })
)
export default orderRouter