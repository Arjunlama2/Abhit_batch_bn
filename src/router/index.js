import userROuter from "./user.router.js"

import categoryRouter from "./category.router.js"

import express from "express"
import productRouter from "./product.router.js"

const router=express.Router()

const allRouters=[
    {
        path:"/user",
        router:userROuter
    },
  
     {
        path:"/category",
        router:categoryRouter
    },
    {
        path:"/product",
        router:productRouter
    }
]





allRouters.map((el)=>{
    router.use(el.path,el.router)
})

export default  router