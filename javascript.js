function delta(valorA,valorB, valorC){
    return (valorB*valorB)-(4*(valorA*valorC))
}
function bhaskara(valorA,valorB,valorC){
    const valorDelta = delta(valorA, valorB, valorC)
    console.log(valorDelta)
    if(valorDelta < 0)
        return({valor_X1: "inexistente",valor_X2: "inexistente"})
    else{
        const valor_X1 = (-valorB + Math.sqrt(valorDelta))/(2*valorA)
        const valor_X2 = (-valorB - Math.sqrt(valorDelta))/(2*valorA)
        return({valor_X1: valor_X1,valor_X2: valor_X2})
    }
}

function handleBtnCalcular(){
    const vA = document.getElementById('valorA').value
    const vB = document.getElementById('valorB').value
    const vC = document.getElementById('valorC').value
    const raizes = bhaskara(vA,vB,vC)
    document.getElementById('resultadoX1').innerHTML = raizes.valor_X1
    document.getElementById('resultadoX2').innerHTML = raizes.valor_X2
    // document.getElementById('inputX1').value = raizes.valor_X1
    // document.getElementById('inputX2').value = raizes.valor_X1

}
document.getElementById('btnCalcular').addEventListener('click', handleBtnCalcular)
