const express = require('express');
const router = express.Router();

// router.post('/addcategory',verifyJWT,verifyAdmin,async (req,res) =>{
//     const category = req.body;
//     const result = await categoryCollection.insertOne(category);
//     res.send(result);
//   })
router.route('/').post((req,res) =>{
    const result = 'Category added successfully';
    res.send(result);
  })
  .get( async (req, res) =>{
    const result = 'Category get successfully';
    res.send(result);
  })
  module.exports = router;