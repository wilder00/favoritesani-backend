const { Router } = require('express')
const router = Router()

const publicRouter = require('./public.routes')

router.use('/public', publicRouter)
router.get('/', (req,res)=>{ return res.json({success: true, message: "Funciona"})})

module.exports = router