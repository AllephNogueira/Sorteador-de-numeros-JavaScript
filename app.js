function sortear(){
    // Todas as variaveis recebem numeros inteiros.
    let quantidade = parseInt(document.getElementById('quantidade').value); // Pegando o valor que foi digitado

    let de = parseInt(document.getElementById('de').value); // Pegando o valor que foi digitado

    let ate = parseInt(document.getElementById('ate').value); // Pegando o valor que foi digitado

    console.log(`quantidade: ${quantidade} do numero: ${de} ate o numero ${ate}`);
}