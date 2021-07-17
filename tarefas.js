class Tarefa {
    constructor(nome, categoria, realizada) {
        this.nome = nome;
        this.categoria = categoria;
        this.realizada = realizada;
    }

    adicionaNaPagina(containerEl) {
        let novoItemLi = document.createElement('li')
        novoItemLi.classList.toggle('item-tarefa')
        if (this.realizada) {
            novoItemLi.classList.toggle('marcado')
        }
        novoItemLi.classList.toggle(`categoria-${this.categoria}`)
        novoItemLi.innerHTML = this.nome
        containerEl.appendChild(novoItemLi)
    }
}

let tarefas = []

tarefas.push(new Tarefa('Comprar leite', 'compras', false))
tarefas.push(new Tarefa('Escutar chimbinha', 'lazer', true))

let itemDOMCampoNovaTarefaNome = document.querySelectorAll('#nova-tarefa-nome')[0]
let itemDOMCampoNovaTarefaCategoria = document.querySelectorAll('#nova-tarefa-categoria')[0]
let itemDOMBotaoAdicionar = document.querySelectorAll('#incluir-nova-tarefa')[0]
let itemDOMListaTarefas = document.querySelectorAll('#lista-tarefas')[0]
itemDOMListaTarefas.innerHTML = ""

tarefas.forEach(tarefa => {
    tarefa.adicionaNaPagina(itemDOMListaTarefas)
})

itemDOMBotaoAdicionar.addEventListener('click', e => {
    let novaTarefa = new Tarefa(itemDOMCampoNovaTarefaNome.value, itemDOMCampoNovaTarefaCategoria.value, false)
    if (novaTarefa.nome.trim() != '') {
        tarefas.push(novaTarefa)
        novaTarefa.adicionaNaPagina(itemDOMListaTarefas)
        itemDOMCampoNovaTarefaNome.value = ''
        itemDOMCampoNovaTarefaNome.focus()
    }
});
