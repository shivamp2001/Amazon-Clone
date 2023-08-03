const express=require('express');
const { Addproduct, FetchallProduct, PopularProduct, FetchPopularproduct, FilterProduct } = require('../controller/productController');
const { Signup, Login } = require('../controller/userController');
const router=express.Router();

// product Apis
router.post("/addproduct",Addproduct)
router.get("/fetchallproduct",FetchallProduct)
router.post("/popularproduct",PopularProduct)
router.get("/fetchpopularproducts",FetchPopularproduct)
router.get("/filterproduct",FilterProduct)

// Users Apis
router.post("/signup",Signup)
router.post("/login",Login)
module.exports=router