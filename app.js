function sortear(){

    // Todas as variaveis recebem numeros inteiros.
    let quantidade = parseInt(document.getElementById('quantidade').value); // Pegando o valor que foi digitado

    if (quantidade < 1){
        alert(`'Quantidade de jogos' deve ser maior ou igual a 1, você digitou:  ${quantidade}`);
        return;
    }

    // nova atualização

    let de = parseInt(document.getElementById('de').value); // Pegando o valor que foi digitado


    let ate = parseInt(document.getElementById('ate').value); // Pegando o valor que foi digitado

    if(de > ate){
        alert('"DO NUMERO" é maior que "ATE O NUMERO", corrija esse campo por favor! ')
        return;
    }
    if (quantidade > (ate - de + 1)) {
        alert(`Voce digitou a 'QUANTIDADE ${quantidade}' de numeros, 'DO NUMERO ${de}', 'ATE O NUMERO ${ate}'. Isso vai gerar um erro de logica, corrija seu campo por favor. `);
        alert('Exemplo de como fazer, QUANTIDADE DE NUMEROS 6, Do numero 1, ate o numero 60. Assim vamos gerar 6 numeros aleatorios do numero 1 ate o 60 ');
        return;
      }
      // codigo novo

    
    let numerosSorteado = []; // Array vazio com os numeros sorteados. 
    let numero;


    for (let contador = 0; contador < quantidade; contador++){

        numero = obterNumerosAleatorios(de, ate);

        while(numerosSorteado.includes(numero)){
            // Includes retorna um false ou true
            // Se dentro do numero sorteado ja estiver o NUMERO NOVO
            // Ele retorna um TRUE e sortea outro numero

                numero = obterNumerosAleatorios(de, ate);
                
        }
        
        numerosSorteado.push(numero);  

    }

    Mensagens('resultado', numerosSorteado) // Aqui e onde vai aparecer os numeros sorteados.

    // Agora vamos iniciar o reiniciar
    // Remover o atributo

    // Se tiver a classe botao-desativado vamos remover
    let botaoReiniciar = document.getElementById('btn-reiniciar')
    if(botaoReiniciar.classList.contains('container__botao-desabilitado')){// SE botaoReiniciar - tiver(contains) - Classe - Botao-desabilidado
        // entao
        // Remova a classe botao desativado
        botaoReiniciar.classList.remove('container__botao-desabilitado');

        botaoReiniciar.classList.add('container__botao');

    }else{

        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
        
    }
    /*
    document.getElementById('btn-reiniciar').classList.remove('container__botao-desabilitado');


    // Adicionar um novo atributo
    document.getElementById('btn-reiniciar').classList.add('container__botao');
    */
    
}


function obterNumerosAleatorios(min, max){ // mim = numero minimo | max = numero maximo.

    return parseInt(Math.random()* (max - min +1)) + min;
    // Aqui estamos sorteando numeros inteiros
    // Entre numero minimo e numero maximo.
}


function Mensagens(id, texto){

    document.getElementById(id).innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${texto}</label>`;
}


function mensagemReiniciarJogo(){

    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Jogo reiniciado: digite os numeros novamente!</label>`;

}

function bloquearBotao(){
    // Aqui serve para bloquear o botao
    document.getElementById('btn-reiniciar').classList.add('container__botao-desabilitado');
}


function reiniciarJogos(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    mensagemReiniciarJogo();
    bloquearBotao();

}