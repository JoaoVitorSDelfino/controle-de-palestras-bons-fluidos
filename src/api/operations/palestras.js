const express = require('express')
const router = express.Router()

const Palestra = require('../../controller/palestraControl')

const bodyParser = require('body-parser')
router.use(bodyParser.json())

// Listar lista de palestras cadastradas
router.get('/showPalestras', async (req, res) => {
  try {
      const listaPaginada = await Palestra.listar()

      res.status(200).json(listaPaginada)
  } catch (error) {
      console.error(error)
      res.status(500).json({error: 'ERRO buscar lista de palestras'})
  }
})

router.post('/addPalestra', async (req, res) => {
  const novaPalestra = await Palestra.criar(req.body)

  if (novaPalestra.status) {
    res.status(201).send({ message: "Palestra adicionada com sucesso!" })
  } else {
    res.status(300).send({ message: "ERRO" })
  }
})

// Alterar uma palestra pelo id
router.put('/editPalestra/:id', async (req, res) => {
  try {
      const palestraExiste = await Palestra.buscarPorId(req.params.id)

      if (!palestraExiste.status) {
          res.status(400).json({status: false, mensagem: 'ERRO, palestra não existe!'})
          return
      }

      palestraAtualizada = await Palestra.alterar(req.params.id, req.body)

      if (palestraAtualizada.status) {
          res.status(200).json({atualizar: palestraAtualizada})
      } else {
          res.status(400).json({atualizar: palestraAtualizada})
      }
  } catch (error) {
      console.error(error)
      res.status(500).json({error: 'ERRO ao editar palestra.'})
  }
})

// Deletar uma palestra pelo id
router.delete('/deletePalestra/:id', async (req, res) => {
  try {
      const palestraExiste = await Palestra.buscarPorId(req.params.id)

      if (!palestraExiste.status) {
          console.log('nao existe')
          res.status(400).json({status: false, mensagem: 'ERRO, palestra não existe!'})
          return
      }
      const palestraExcluida = await Palestra.deletar(req.params.id)

        if (palestraExcluida.status) {
            res.status(200).json({excluir: { palestraExcluida }})
        } else {
            res.status(400).json({excluir: palestraExcluida})
        }
  } catch (error) {
      console.error(error)
      res.status(500).json({error: 'ERRO ao deletar palestra.'})
  }
})

module.exports = router