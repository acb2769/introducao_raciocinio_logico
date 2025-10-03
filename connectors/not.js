// Exemplo do conector NOT (!)

// Este conector INVERTE o valor lógico da condição.
// Se a condição é verdadeira, o '!' a torna falsa, e vice-versa.

// posso dirigir:
// Se eu tenho 18 anos 
// se tenho CNH eu posso dirigir 
// se nacionalidade === 'Brasileira'

// contexto de validação
let idade = 18
let possuiCNH = true
let nacionalidade = 'Brasileira'
let minhavalidacao = idade >= 18 &&possuiCNH == true && nacionalidade == 'Brasileira'
let possuiInformacao = possuiCNH ? ´PossuiCNH' : nacionalidade === 'Brasileira' ? 'nacionalidade' : 'Outros'
console.log(possuiInformacao)

//contexto de atribuição
if (!(idade >= 18 && possuiCNH == true && nacionalidade === 'Brasileira')){
    console.log('Eu NÃO posso dirigir')
} else{
    console.log('Eu posso dirigir')}
