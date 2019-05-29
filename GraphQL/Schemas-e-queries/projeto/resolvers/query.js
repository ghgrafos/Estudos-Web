const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return 'bom dia dna Gláucia tudo bem com voce!'
    },
    horaAtual() {
        return new Date
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Glaucia',
            idade: 43,
            email: 'glaucia@email.com',
            endereco: 'googleMaps',
            idade: 43,
            salario_real: 1234.78,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Notebook Gamer',
            preco: 4580.99,
            desconto: 0.15
        }
    },
    numerosMegaSena() {
        //return [4, 6, 8, 15, 29, 54]
        const crescente = (a, b) => a-b
        return Array(6).fill(0)
        .map(_n=>parseInt(Math.random()*60+1))
        .sort(crescente)
    },
    usuarios() {
        return usuarios
    },
    usuario(_, {id}) {
        const sels = usuarios.filter(u => u.id === id)
        return sels ? sels[0]: null
    },
    perfis() {
        return perfis
    },
    perfil(_,{id}) {
        const sels = perfis.filter(p => p.id === id)
        return sels ? sels[0]: null
    }
}
