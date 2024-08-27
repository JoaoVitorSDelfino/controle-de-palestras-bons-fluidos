const express = require('express')
const router = express.Router()

const Palestra = require('../../controller/palestraControl')

const bodyParser = require('body-parser')
router.use(bodyParser.json()) // Para processar JSON

router.get('/addPalestra', async (req, res) => {
  const novaPalestra = await Palestra.criar(req.body)

  console.log('teste2')

  if (novaPalestra.status) {
    res.status(201).send({ message: "Palestra adicionada com sucesso!" })
  } else {
    res.status(300).send({ message: "ERRO" })
  }
})

module.exports = router