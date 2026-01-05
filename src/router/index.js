import userROuter from "./user.router.js"

import categoryRouter from "./category.router.js"

import express from "express"

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
]





allRouters.map((el)=>{
    router.use(el.path,el.router)
})

export default  router