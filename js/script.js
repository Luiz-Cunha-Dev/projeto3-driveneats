function selecionarPrato(numeroPrato){
    const selecionado = document.querySelector('.pratos .opcao-selecionada');

    if (selecionado !== null){
        selecionado.classList.remove('opcao-selecionada');
    }

    const opcao = document.querySelector(numeroPrato);
    opcao.classList.add('opcao-selecionada');

const vector1 = document.querySelector('.pratos .visivel');

if (vector1 !== null){
    vector1.classList.remove('visivel');
}
    const vector2 = document.querySelector(numeroPrato + ' .oculto');
    vector2.classList.add('visivel')

    finalizarPedido()

}




function selecionarBebida(numeroBebida){
    const selecionado = document.querySelector('.bebidas .opcao-selecionada');

    if (selecionado !== null){
        selecionado.classList.remove('opcao-selecionada');
    }

    const opcao = document.querySelector(numeroBebida);
    opcao.classList.add('opcao-selecionada');

const vector1 = document.querySelector('.bebidas .visivel');

if (vector1 !== null){
    vector1.classList.remove('visivel');
}
    const vector2 = document.querySelector(numeroBebida + ' .oculto');
    vector2.classList.add('visivel')

    finalizarPedido()
}




function selecionarSobremesa(numeroSobremesa){
    const selecionado = document.querySelector('.sobremesas .opcao-selecionada');

    if (selecionado !== null){
        selecionado.classList.remove('opcao-selecionada');
    }

    const opcao = document.querySelector(numeroSobremesa);
    opcao.classList.add('opcao-selecionada');

const vector1 = document.querySelector('.sobremesas .visivel');

if (vector1 !== null){
    vector1.classList.remove('visivel');
}
    const vector2 = document.querySelector(numeroSobremesa + ' .oculto');
    vector2.classList.add('visivel')

    finalizarPedido()
}



function finalizarPedido(){
    const pratoSelecionado = document.querySelector('.pratos .opcao-selecionada'); 
    const bebidaSelecionada = document.querySelector('.bebidas .opcao-selecionada');
    const sobremesaSelecionada = document.querySelector('.sobremesas .opcao-selecionada');

    if (pratoSelecionado !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
    const botao = document.querySelector('.barra-inferior .finalizar')
    botao.classList.add('fundo-verde')
    botao.innerHTML = "Fechar Pedido";

    }
}



function quadroFinal (){
    const finalizar = document.querySelector('.tela-final')
    finalizar.classList.remove('oculto')
}




function botaoCancelar(){
    const cancelar = document.querySelector('.tela-final')
    cancelar.classList.add('oculto')
}




function Nomes (){
    const pratoSelecionado = document.querySelector('.pratos .opcao-selecionada .nome-opcao'); 
    const bebidaSelecionada = document.querySelector('.bebidas .opcao-selecionada .nome-opcao');
    const sobremesaSelecionada = document.querySelector('.sobremesas .opcao-selecionada .nome-opcao');

    const nome1 = document.querySelector('.escolha1')
    const nome2 = document.querySelector('.escolha2')
    const nome3 = document.querySelector('.escolha3')

    nome1.innerHTML = pratoSelecionado.innerHTML
    nome2.innerHTML = bebidaSelecionada.innerHTML
    nome3.innerHTML = sobremesaSelecionada.innerHTML
}

function preco (){
    const pratoSelecionado = document.querySelector('.pratos .opcao-selecionada .valor-opcao'); 
    const bebidaSelecionada = document.querySelector('.bebidas .opcao-selecionada .valor-opcao');
    const sobremesaSelecionada = document.querySelector('.sobremesas .opcao-selecionada .valor-opcao');

    const valor1 = document.querySelector('.preco1');
    const valor2 = document.querySelector('.preco2');
    const valor3 = document.querySelector('.preco3');

    valor1.innerHTML = 'R$ ' + pratoSelecionado.innerHTML;
    valor2.innerHTML = 'R$ ' + bebidaSelecionada.innerHTML;
    valor3.innerHTML = 'R$ ' + sobremesaSelecionada.innerHTML;

    const valorSoma1 = parseFloat(pratoSelecionado.innerHTML.replace(",", "."));
    const valorSoma2 = parseFloat(bebidaSelecionada.innerHTML.replace(",", "."));
    const valorSoma3 = parseFloat(sobremesaSelecionada.innerHTML.replace(",", "."));
    
    const soma = valorSoma1 + valorSoma2 + valorSoma3;
    const somaArredondada = parseFloat(soma.toFixed(2));
    const somaString = String(somaArredondada)
    const somaStringComVirgula = somaString.replace(".", ",");
    const total = document.querySelector('.preco-total');
console.log(somaStringComVirgula)
    total.innerHTML= 'R$ ' + somaStringComVirgula

}       