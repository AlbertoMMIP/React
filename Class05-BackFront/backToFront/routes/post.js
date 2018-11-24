const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const auth = require('../Helpers/Helper');

router.get("/",auth.verifyToken, (req, res) => {
  Post.find()
    .then(posts => {
      res.status(200).json({ posts });
    })
    .catch(err => {
      res.status(500).json({ err, msg: "Algo no funco" });
    });
});

router.get('/:id', (req,res) => {
  Post.findById(req.params.id)
    .then(post => {
      res.status(200).json({post});
    })
    .catch(err => {
      res.status(500,json({err,msg:"Hubo pedo"}));
    })
})

router.post('/', (req,res) => {
  Post.create(req.body)
    .then(post => {
      res.status(201).json({post})
    })
    .catch(err => {
      res.status(500).json({err, msg:"No se creó"})
    })
});

router.patch('/:id',(req,res) => {
  Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    .then(post => {
      res.status(200).json({post})
    })
    .catch(err => {
      res.status(500).json({err,msg:"No se actualizo"})
    })
});

router.delete('/:id',(req,res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(post => {
      res.status(200).json({post});
    })
    .catch(err => {
      res.status(500).json({err,msg:"No se encontró el elemento"});
    })
})


module.exports = router;