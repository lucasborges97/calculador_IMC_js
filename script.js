let nome = document.querySelector("#nome");
let altura = document.querySelector("#altura");
let peso = document.querySelector("#peso");
let btnCalcular = document.querySelector("#btnCalcular");
let historico = document.querySelector(".historico");
let imc = 0;



const salvarInfo = (nomeValor, alturaValor, pesoValor) => {

    imc = (pesoValor / (alturaValor * alturaValor)).toFixed(2);

    const div = document.createElement("div");
    div.classList.add("itens-hist");

    const texto = document.createElement("h3");
    texto. innerText = nomeValor + ' com IMC igual a ' + imc;
    div.appendChild(texto);

    const delBtn = document.createElement("button");
    delBtn.classList.add("btnDelete");
    delBtn.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
    div.appendChild(delBtn);

    historico.appendChild(div);

    nome.value = '';
    altura.value = '';
    peso.value = '';
    nome.focus();
}


document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");

    if(parentEl.classList.contains("itens-hist")) {
        parentEl.remove();
    }
});



btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let nomeValor = nome.value;
    let alturaValor = altura.value;
    let pesoValor = peso.value;

    if(pesoValor !== '' && alturaValor !== '' && nomeValor !== '') {
        salvarInfo(nomeValor, alturaValor, pesoValor);
    }
    else {
        alert('Por favor preencha as informações corretamente!');
    }

});






