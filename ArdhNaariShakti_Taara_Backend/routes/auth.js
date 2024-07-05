const router = require("express").Router()
const User = require("../model/user")
const bcrypt = require("bcrypt")

// regsiter
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password, salt)

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    })

    const user = await newUser.save()
    res.status(200).json(user)
  } catch (error) {
    console.log("failure")
    res.status(500).json(error)
  }
})

// login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    //if no user
    if (!user) {
      console.log("Wrong Credentials")
      return res.status(400).json("Wrong Credentials!") // Return response here
    }

    
    //if same user then compare password
    const validate = await bcrypt.compare(req.body.password, user.password)
    //if not validate
    if (!validate) {
      console.log("Wrong Cred")
      return res.status(400).json("Wrong Credentials!")
    }
    
    const { password, ...other } = user._doc
    console.log("Success")
    return res.status(200).json(other)
  } catch (error) {
    console.log("error")
    return res.status(500).json(error)
  }
})
module.exports = router
