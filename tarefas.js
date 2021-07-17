class Tarefa {
    constructor(nome, categoria, realizada) {
        this.nome = nome;
        this.categoria = categoria;
        this.realizada = realizada;
    }
}

let tarefas = []

tarefas.push(new Tarefa('Comprar leite', 'compras', false))
tarefas.push(new Tarefa('Escutar chimbinha', 'lazer', true))