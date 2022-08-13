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
}



function finalizarPedido(){
    const pratoSelecionado = document.querySelector('.pratos .opcao-selecionada'); 
    const bebidaSelecionada = document.querySelector('.bebidas .opcao-selecionada');
    const sobremesaSelecionada = document.querySelector('.sobremesas .opcao-selecionada');

    if (pratoSelecionado !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
    const botão = Document.querySelector('.barra-inferior . finalizar')
    botão.classList.add('fundo-verde')
    }
}