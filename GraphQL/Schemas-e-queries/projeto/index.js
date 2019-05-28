const {ApolloServer, gql}= require ('apollo-server')

const usuarios = [{
    id: 1,
    nome: 'Glaucia Angelis',
    email: 'glangel@hotmail',
    idade: 40
},
{
    id: 2,
    nome: 'Gilmar Pimenta',
    email: 'pimenta@hotmail',
    idade: 60
},
{
    id: 3,
    nome: 'Angell',
    email: 'angell@hotmail',
    idade: 43
}
]

const typeDefs = gql`
    #schema queries
    scalar Date
    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }
    type Usuario {
        id: ID
        nome: String
        email: String
        endereco: String
        idade: Int
        salario: Float
        vip: Boolean
    }
    type Query {
        ola: String
        horaAtual: Date
        usuarioLogado: Usuario
        produtoEmDestaque: Produto 
        numerosMegaSena: [Int]!
        usuarios: [Usuario]!
    }
`
const resolvers = {
    Produto: {
        precoComDesconto(produto) {
            if(produto.desconto) {
                return produto.preco * (1 - produto.desconto)
            }else{
                return produto.preco
            }
        }
    },
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        }
    },
    Query: {
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
            .map(n=>parseInt(Math.random()*60+1))
            .sort(crescente)
        },
        usuarios() {
            return usuarios
        }
    }
}

const server = new ApolloServer ({
    typeDefs,
    resolvers
})

server.listen().then(({url})=>{
    console.log(`executando em $({url})`)
})