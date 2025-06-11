let pessoa = {
    nome: 'Ana',
    cpf: '123.456.789-00',
    genero: 'F',
    idade: 25,
    altura: 1.70,
    dataNascimento: '25/12/1998',
    endereco: {
        rua: 'Washington Soares',
        numero: '123',	
        bairro: 'Messejana',
        cidade: 'Fortaleza',
        estado: 'Ceará',
    },

    adicionar: function() {
        console.log('Adicionando...')
    },
    remover: function() {
        console.log('Removendo...')
    },
    contato: {  
    telefone: '999999999',
    email: 'ana@g1.com',
    }
}

//1 - imprimindo no console
console.log(pessoa)

// 2 - Acessando os dados do objeto
console.log(pessoa.dataNascimento)
console.log(pessoa.endereco.bairro)
console.log(pessoa.contato.email)