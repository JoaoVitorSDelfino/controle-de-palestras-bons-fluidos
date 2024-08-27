const User = require('../models/user')
const {validateUser} = require('./validate/userValidation')
const validarBuscaLista = require('./controller').validarBuscaLista

module.exports = {
    criar: async (dados) => {
        // Valida os dados recebidos
        if (validateUser(dados).status) {
            // Padroniza funcao para ser minúsculo
            dados.funcao = dados.funcao.toLowerCase()

            novoUser = await User.create(dados)

            return {status: true, mensagem: 'Sucesso ao criar usuário!', user: novoUser}
        } else {
            return validateUser(dados)
        }
    },

    buscarPorId: async (id) => {
        const user = await User.findOne({where: {id: id}})

        if (user) {
            return {status: true, mensagem: 'Sucesso ao buscar usuário!', user: user}
        } else {
            return {status: false, mensagem: 'ERRO, user não existe!'}
        }   
    },

    alterar: async (id, novosDados) => {
        const user = await User.findOne({where: {id: id}})

        if (!user) {
            return {status: false, mensagem: 'ERRO, usuário não existe!'}
        }

        if (validateUser(novosDados).status) {
            await user.update(
                novosDados, 
                {where: {id: id}}
            )

            userAtualizado = await User.findOne({
                where: {id: id}
            })    

            return {status: true, mensagem: 'Sucesso ao alterar usuário!', userAtualizado: userAtualizado}
        } else {
            return validateUser(novosDados)
        }
    },

    deletar: async (id) => {
        const user = await User.findOne({
            where: { id: id },
        })

        // Valida se usuário informado existe
        if (user) { 
            await User.destroy({where: { id: id }})

            return {status: true, mensagem: 'Sucesso ao deletar usuário!', userExcluido: user}
        } else {
            return {status: false, mensagem: 'ERRO, usuário não existe!'}
        }
    },

    // Listar todos os usuários no banco de dados,
    // utilizado apenas para o processamento de dados na
    // lógica de negócio e para nenhuma outra rota
    listar: async () => {
        return await User.findAll()
    },

    listarPaginacao: async (limite, pagina) => {
        limite = parseInt(limite)
        pagina = (pagina - 1) * 5

        if (validarBuscaLista(limite, pagina).status) {
            const users = await User.findAll({offset: pagina, limit: limite})
    
            return {status: true, mensagem: 'Sucesso ao buscar página de usuários!', user: users}
        } else {
            return validarBuscaLista(limite, pagina)
        }
    }
}