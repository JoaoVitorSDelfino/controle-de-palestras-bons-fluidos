const express = require('express')
const router = express.Router()

router.get('/api', async (req, res) => {
    try {
        res.status(200).json({status: true, mensagem: 'Você está na rota API!'})
    } catch (error) {
        console.error(error)
        res.status(400).json({error: 'ERRO ao acessar a rota API'})
    }
})

router.use('/api/palestras', require('./palestras'))
router.use('/api/users', require('./users'))

module.exports = router