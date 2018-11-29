const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const upload = require('../Helpers/multerr');

router.post('/login', async(req, res) => {
  const user = await User.findOne({email: req.body.email});

  if(!user) return res.status(404).json({msg:"Email no valido"});

  let valiPassword = bcrypt.compareSync(req.body.password, user.password);
  
  if(!valiPassword) return res.status(500).json({msg:"La contraseña no es correcta"});

  const token = jwt.sign(
      {id:user._id}, 
      process.env.SECRET,
      {
        expiresIn:8600
      }
   );
   delete user._doc.password;
   res.status(200).json({user,token});
});

router.post('/register', (req,res) => {
  if(req.body.password !== req.body.confirmpassword) return res.status(500).json({mjg:"Las contraseñas no coincidne"});

  const salt = bcrypt.genSaltSync(256);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  User.create({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword
  })
    .then(() =>{
      res.status(201).json({msg:"Usuario creado con exito"});
    })
    .catch(err => {
      res.status(500).json({msg:"El usuario no se pudo crear"});
    })

});

router.patch("/:id",upload.single("picture"), (req,res) => {
  console.log("que haces",req.body)
  let user = {};
  Object.keys(req.body).forEach((ele) => {
    user[ele] = req.body[ele];
  });

  if(req.file) user.profile_picture = req.file.url;

  User.findByIdAndUpdate(req.params.id, {$set: user}, {new:true})
      .then(user => {
        res.status(200).json({user});
      })
      .catch(err => {
        res.status(500).json({err,msj:"Error al actualizar"});
      })
});

module.exports = router;
