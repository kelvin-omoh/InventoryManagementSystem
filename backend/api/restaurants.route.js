import express from 'express'
const router =express.Router()
router.route("/").get((req,res)=>res.send("hello world"))
// console.log(3);
export default router