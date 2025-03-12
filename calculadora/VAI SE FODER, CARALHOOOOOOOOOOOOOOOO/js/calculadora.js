const formulario = document.querySelector("#formulario");

console.log(formulario);

formulario.addEventListener('submit', function(e){
    e.preventDefault;

    const inputPeso = e.target.querySelector("#peso");
    const peso = Number(inputPeso.value);

    const inputAltura = e.target.querySelector("#altura");
    const altura = Number(inputAltura.value);

    const imc = calcularIMC(peso, altura);
    const classificacao = tabelaIMC(imc);
    alert(classificacao);
});

function calcularIMC(peso, altura){
    let imc = (peso / altura ** 2);
    return imc.toFixed(2);
}

//essa função é para classificar o grau de imc
function tabelaIMC(imc){
    const classificacao = ['um palito', 'ser humano', 'Garfield', 'ipopotamo', 'Thais Carla', 'a sua mãe']

    if(imc >= 39.9) return classificacao[5];
    if(imc >= 34.9) return classificacao[4];
    if(imc >= 29.9) return classificacao[3];
    if(imc >= 24.9) return classificacao[2];
    if(imc >= 18.5) return classificacao[1];
    if(imc >= 18.5) return classificacao[1];
    if(imc < 18.5) return classificacao[0];

}