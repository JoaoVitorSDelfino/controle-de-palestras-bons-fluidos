const validarCampo = require('../control').validarCampo

function validarData (data) {
    // Define padrão DD-MM-AAAA
    const padraoData = /^\d{2}-\d{2}-\d{4}$/

    if (data == '' || data == null) {
        return {status: false, mensagem: 'ERRO, data não pode ser vazia!'}
    } else if (!padraoData.test(data)) {
        return {status: false, mensagem: 'ERRO, formato de data inválido! Use o formato DD-MM-AAAA.'}
    } else {
        let [dia, mes, ano] = data.split('-')

        dia = parseInt(dia, 10)
        mes = parseInt(mes, 10)
        ano = parseInt(ano, 10)

        // Verifica se dia ou mês digitados são válidos
        // Valida também para anos bissextos
        if (dia > 31 || (dia > 28 && mes == 2 && (ano % 4 != 0)) ||(dia > 29 && mes == 2 && (ano % 4 == 0))) {
            return {status: false, mensagem: 'ERRO, o dia informado é inválido!'}
        } else if (mes < 1 || mes > 12) {
            return {status: false, mensagem: 'ERRO, o mês informado é inválido!'}
        }
    }

    return {status: true, mensagem: ''}
}

const validatePalestra = (dados) => {

    return {status: true, mensagem: ''}
}

module.exports = {validatePalestra}