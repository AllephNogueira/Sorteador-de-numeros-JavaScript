function sortear(){
    // Todas as variaveis recebem numeros inteiros.
    let quantidade = parseInt(document.getElementById('quantidade').value); // Pegando o valor que foi digitado

    let de = parseInt(document.getElementById('de').value); // Pegando o valor que foi digitado

    let ate = parseInt(document.getElementById('ate').value); // Pegando o valor que foi digitado

    
    let numerosSorteado = []; // Array vazio com os numeros sorteados. 
    let numero;


    for (let contador = 0; contador < quantidade; contador++){

        numero = obterNumerosAleatorios(de, ate);

        console.log(`numero fora do while ${numero}`)

        while(numerosSorteado.includes(numero)){
            // Includes retorna um false ou true
            // Se dentro do numero sorteado ja estiver o NUMERO NOVO
            // Ele retorna um TRUE e sortea outro numero

                numero = obterNumerosAleatorios(de, ate);

                console.log(`numero dentro do while ${numero}`)

        }
        
        numerosSorteado.push(numero);


        

    }

    Mensagens('resultado', numerosSorteado) // Aqui e onde vai aparecer os numeros sorteados.

    // Agora vamos iniciar o reiniciar



    
}


function obterNumerosAleatorios(min, max){ // mim = numero minimo | max = numero maximo.

    return parseInt(Math.random()* (max - min +1)) + min;
    // Aqui estamos sorteando numeros inteiros
    // Entre numero minimo e numero maximo.
    
    
}
function Mensagens(id, texto){

    document.getElementById(id).innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${texto}</label>`;

}

function reiniciarJogos(){

}