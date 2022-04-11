function tratarErro(erro) {
    throw 'Ocorreu um erro no sistema, por favor tente novamente!';
}

function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!') 
    } catch (e) {
        tratarErro(e)
    }
}

const obj = { name: "Kelvin"}
imprimirNome(obj)