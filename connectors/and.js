// Exemplo do conector AND (&&)

// Este conector retorna 'true' apenas se TODAS as condições forem verdadeiras.


// Se eu tenho 18 anos e tenho CNH eu posso dirigir e nacionalidade === 'Brasileira'
// contexto de atribuição

let idade = 18
let possuoCNH = true
let nacionalidade = 'Brasileira'

// contexto de validação
if(idade >= 18 && possuoCNH == true && nacionalidade === 'Brasileira'){
    console.log('Eu posso dirigir')
} else{
    console.log('Eu NÃO posso dirigir')}