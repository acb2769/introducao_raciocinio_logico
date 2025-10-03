// Exemplo do conector OR (||)

// Este conector retorna 'true' se PELO MENOS UMA das condições forem verdadeiras.

//Eu posso votar caso eu seja Homem ou Mulher
//tenha mais de 16 anos
// tenha Titulo de Eleitor

// contexto de atribuição

let sexo = 'H' // ou 'M'
let idade = 15
let possuiTituloEleitor = true

// contexto de Validação
if((sexo == 'H' || sexo == 'M') && idade>=16 && possuiTituloEleitor==true){
    console.log('Você pode votar')}
    else{
    console.log('Você Não pode votar')}
