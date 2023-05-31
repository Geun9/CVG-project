const express = require('express');

const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const reviewRouter = require('./reviewRouter');
const wishRouter = require('./wishRouter');

const router = express.Router();

router.use('/users', userRouter.router);
router.use('/products', productRouter.router);
router.use('/review', reviewRouter.router);
router.use('/wish', wishRouter.router);

module.exports = router;
