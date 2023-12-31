// import express
const express = require('express');
// import router
const router = express.Router();
// require controller
const commentCtrl = require('../controllers/comment');

//routes 
router.post('/createComment', commentCtrl.createComment);
router.delete('/comments/:id', commentCtrl.deleteComment);


// export the router 
module.exports = router; 