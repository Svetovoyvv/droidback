const Router = require ('express')
const router = new Router()
const userRouter = require ('./userRouter')
const prefRouter = require('./prefRouter')

router.use('/user', userRouter);
router.use('/pref', prefRouter);

module.exports = router