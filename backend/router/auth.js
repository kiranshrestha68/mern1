const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`hello world from router world`);
});

// ..............using promises....................

// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "plz filled the properly" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "email already taken" });
//       }

//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ mesage: "user registere sucessfully" });
//         })
//         .catch((err) => res.status(500).json({ error: "failed regiter" }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "plz filled the properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email already taken" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password doesnot match" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      res.status(201).json({ message: "user registere sucessfully" });
    }

    // const userRegister =

    // if (userRegister) {
    //   res.status(201).json({ mesage: "user registere sucessfully" });
    // } else {
    //   res.status(500).json({ error: "failed to register " });
    // }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  // res.json({message:"awesome"});
  let token;
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "plz filled the data" });
    }
    const userLogin = await User.findOne({ email: email }); //email validation

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires:new Date(Date.now() + 2589200000),
        httpOnly: true
      });
      // console.log(userLogin);
      if (!isMatch) {
        res.status(400).json({ message: "email pww doesnot match" });
      } else {
        res.json({ message: "user signin sucessfullly" });
      }
    } else {
      res.status(400).json({ message: "eemail pw doesnot match" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
