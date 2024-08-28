const express = require('express')
const router = express.Router()

const Usuario = require('../../controller/userControl')

const bodyParser = require('body-parser')
router.use(bodyParser.json())

// Rota para obter lista de usuários
router.get('/showUsers', async (req, res) => {
    try {
        const listaPaginada = await Usuario.listar()

        res.status(200).json(listaPaginada)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'ERRO buscar lista de usuários'})
    }
})

// Adicionar novo usuário
router.post('/addUser', async (req, res) => {
    try {
        const usuario = await Usuario.criar(req.body)

        if (usuario.status) {
            res.status(201).json(usuario)
        } else {
            res.status(400).json(usuario)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'ERRO ao criar usuario.'})
    }
})

// Alterar um usuário pelo id
router.put('/editUser/:id', async (req, res) => {
    try {
        dados = req.body
        
        const usuarioAtualizado = await Usuario.alterar(req.params.id, dados)

        if (usuarioAtualizado.status) {
            res.status(200).json(usuarioAtualizado)
        } else {
            res.status(400).json(usuarioAtualizado)
        }
        return
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'ERRO ao editar usuário'})
    }
})

// Deletar um usuário pelo id
// Apenas administradores (coordenadores) podem remover usuários
router.delete('/deleteUser/:id', async (req, res) => {
    try {
        const usuarioExcluido = await Usuario.deletar(req.params.id)

        if (usuarioExcluido.status) {
            res.status(200).json(usuarioExcluido)
        } else {
            res.status(400).json(usuarioExcluido)
        }   
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'ERRO ao deletar usuario.'})
    }
})

module.exports = router