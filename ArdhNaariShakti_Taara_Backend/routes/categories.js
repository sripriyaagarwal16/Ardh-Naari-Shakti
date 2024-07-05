const router = require("express").Router()
const Category = require("../model/category")

router.post("/fillcategory", async (req, res) => {
  const newCat = new Category(req.body)
  try {
    const savedCat = await newCat.save()
    res.status(200).json(savedCat)
  } catch (error) {
    res.status(500).json(error)
  }
})
/* {
    "name":"sport" 
} */

// get all cat

router.get("/getcategory", async (req, res) => {
  try {
    const cat = await Category.find()
    res.status(200).json(cat)
    console.log("successful")
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
