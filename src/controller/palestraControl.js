const Palestra = require('../models/palestra')
const {validatePalestra} = require('./validate/palestraValidation')
const validarBuscaLista = require('./control').validarBuscaLista

module.exports = {
    criar: async (dados) => {
        // Valida os dados recebidos
        if (validatePalestra(dados).status) {
            console.log(dados)

            const novaPalestra = await Palestra.create(dados)

            return {status: true, mensagem: 'Sucesso ao criar palestra!', palestra: novaPalestra}
        } else {
            return validatePalestra(dados)
        }
    },

    buscarPorId: async (id) => {
        const palestra = await Palestra.findOne({where: {id: id}})

        if (palestra) {
            return {status: true, mensagem: 'Sucesso ao buscar palestra!', palestra: palestra}
        } else {
            return {status: false, mensagem: 'ERRO, palestra não existe!'}
        }   
    },

    alterar: async (id, novosDados) => {
        if (validatePalestra(novosDados).status) {
            await Palestra.update(
                novosDados, 
                {where: {id: id}}
            )

            palestraAtualizada = await Palestra.findOne({
                where: {id: id}
            })    

            return {status: true, mensagem: 'Sucesso ao alterar palestra!', palestraAtualizada: palestraAtualizada}
        } else {
            return validatePalestra(novosDados)
        }
    },

    deletar: async (id) => {
        const palestra = await Palestra.findOne({where: {id: id}})

        await Palestra.destroy({where: { id: id }})

        return {status: true, mensagem: 'Sucesso ao deletar palestra!', palestraExcluida: palestra}
    },

    listar: async () => {
        return await Palestra.findAll()
    },

    listarPaginacao: async (limite, pagina) => {
        limite = parseInt(limite)
        pagina = (pagina - 1) * 5

        if (validarBuscaLista(limite, pagina).status) {
            const palestras = await Palestra.findAll({offset: pagina, limit: limite})
    
            return {status: true, mensagem: 'Sucesso ao buscar página de palestras!', palestras: palestras}
        } else {
            return validarBuscaLista(limite, pagina)
        }
    }
}