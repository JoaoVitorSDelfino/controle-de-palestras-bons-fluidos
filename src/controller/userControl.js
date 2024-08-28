const User = require('../models/user')

module.exports = {
    criar: async (dados) => {
        novoUser = await User.create(dados)

        return {status: true, mensagem: 'Sucesso ao criar usuário!', user: novoUser}
    },

    buscarPorLogin: async (login) => {
        const user = await User.findOne({where: {login: login}})

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

        await user.update(
            novosDados, 
            {where: {id: id}}
        )

        userAtualizado = await User.findOne({
            where: {id: id}
        })    

        return {status: true, mensagem: 'Sucesso ao alterar usuário!', userAtualizado: userAtualizado}
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
}