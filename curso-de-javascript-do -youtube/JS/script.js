let contador = 0;
let inputbtn = document.getElementById('inputTarefa');
let btnadd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    // pegar o valor digitado no input 
    let valorinputbtn = inputbtn.value.trim();

    // se não for vazio, nem nulo, nem indefinido
    if (valorinputbtn) {
        ++contador;

        let novoItem = `
        <div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorinputbtn}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete">
                    <i class="mdi mdi-delete"></i> Deletar
                </button>
            </div>
        </div>`;

        // adicionar novo item no main
        main.innerHTML += novoItem;

        // zerar o campo de entrada e focar
        inputbtn.value = "";
        inputbtn.focus();
    }
}

function deletar(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    let item = document.getElementById(id);
    let icone = document.getElementById('icone_' + id);

    if (item.classList.contains('item')) {
        item.classList.add('clicado');
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('clicado');
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

inputbtn.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btnadd.click();
    }
});
