const express = require('express');
const router = express.Router();
const addCategoryControllers = require('../../controllers/addCategory.controllers');
// We import whole file 

// router.post('/addcategory',verifyJWT,verifyAdmin,async (req,res) =>{
//     const category = req.body;
//     const result = await categoryCollection.insertOne(category);
//     res.send(result);
//   })
// router.get('/', async (req, res) =>{
//   const result = 'Category added successfully';
//   res.send(result);
// })
router
  .route('/')
  .post(addCategoryControllers.saveCateogry)
  .get( addCategoryControllers.getACategory)

  module.exports = router;