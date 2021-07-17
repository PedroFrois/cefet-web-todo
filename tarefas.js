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

let listaTarefas = document.querySelectorAll('#lista-tarefas')[0]
listaTarefas.innerHTML = ""

tarefas.forEach(tarefa => {
    tarefa.adicionaNaPagina(listaTarefas)
})
