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
}