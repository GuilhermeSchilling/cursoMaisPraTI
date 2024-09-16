// // Ex-1
// let carro = {
//   marca: "Volkswagen",
//   modelo: "Cross Up",
//   ano: 2018,
// };

// for (let key in carro) {
//   console.log(`${key}: ${carro[key]}`);
// }

// Ex-2
// let livro = {
//   titulo: "O Pequeno Príncipe",
//   autor: "Antoine de Saint-Exupéry",
//   anoPublicado: 1943,
//   genero: "Fábula",
// };

// const search = "editora";
// let propExists = false;

// for (let key in livro) {
//   if (key === search) propExists = true;
// }

// if (!propExists) {
//   livro.editora = "Éditions Gallimard";
// }

// for (let key in livro) {
//   console.log(`${key}: ${livro[key]}`);
// }

// Ex-3

// let livro = {
//   titulo: "O Pequeno Príncipe",
//   autor: "Antoine de Saint-Exupéry",
//   preco: 35,
//   anoPublicado: 1943,
//   genero: "Fábula"
// };

// let valorAcima = 50;

// const filtroValor = {};
// for (const key in livro) {
//   if (livro[key] > valorAcima) {
//     filtroValor[key] = livro[key];
//   }
// }

// console.log(filtroValor);

// Ex-4

// const pessoas = [
//     {nome: 'Paulo', idade: '25', cidade: 'Sao Paulo' },
//     {nome: 'Jessica', idade: '31', cidade: 'Porto Alegre' },
//     {nome: 'Mateus', idade: '15', cidade: 'Campinas' },
//     {nome: 'Joao', idade: '25', cidade: 'Natal' },
// ]

// let num1 = 1
// for(let pessoa of pessoas){
//     console.log(`Nome-${pessoa.nome} Idade-${pessoa.idade} Cidade-${pessoa.cidade}`)
//     num1++
// }

// Ex-5

// const alunos = [
//   { nome: "Paulo", nota1: 7, nota2: 5 },
//   { nome: "Jessica", nota1: 8, nota2: 8 },
//   { nome: "Mateus", nota1: 7, nota2: 7 },
//   { nome: "Joao", nota1: 8, nota2: 9 },
// ];

// for (const aluno of alunos) {
//   const avg = (aluno.nota1 + aluno.nota2) / 2;
//   console.log(`A média do ${aluno.nome} é ${avg}`);
// }

// Ex-6

// const funcionarios = [
//   { nome: "Paulo", cargo: "Auxiliar Tecnico", salario: 1800 },
//   { nome: "Jessica", cargo: "Gerente de Publicidade", salario: 3000 },
//   { nome: "Mateus", cargo: "Diretor Geral", salario: 8000 },
//   { nome: "Pedro", cargo: "Tecnico", salario: 2700 },
// ];

// const minSalario = 2900;
// for (const funcionario of funcionarios) {
//   if (funcionario.salario > minSalario) {
//     console.log(
//       `Nome-${funcionario.nome} Cargo-${funcionario.cargo} Salário-R$${funcionario.salario}`
//     );
//   }
// }

// Ex-7

// const produtos = [
//   { nome: "Refrigerante", preco: 8.99, desconto: 0.1 },
//   { nome: "Massa", preco: 15.0, desconto: 0.1 },
//   { nome: "Arroz", preco: 3.99, desconto: 0.1 },
//   { nome: "Feijão", preco: 5.99, desconto: 0.1 },
//   { nome: "Batata", preco: 2.99, desconto: 0.1 },
//   { nome: "Leite", preco: 3.49, desconto: 0.1 },
// ];
// produtos.forEach((produto) => {
//   let precoDesconto = produto.preco * (1 - produto.desconto);
//   console.log(`${produto.nome}: R$${precoDesconto.toFixed(2)}`);
// });

// Ex-8

// const filmes = [
//   { titulo: "Titanic", anoLancamento: 1998, diretor: "James Cameron" },
//   { titulo: "Avatar", anoLancamento: 2009, diretor: "Christopher Nolan" },
//   {
//     titulo: "Star Wars: Episódio V",
//     anoLancamento: 2019,
//     diretor: "George Lucas",
//   },
//   { titulo: "Jurassic Park", anoLancamento: 1993, diretor: "Steven Spielberg" },
// ];

// const filmesTitulos = [];
// filmes.forEach((filme) => {
//   filmesTitulos.push(filme.titulo);
// });
// console.log(filmesTitulos);

// Ex-9

// const clientes = [
//   { nome: "Paulo", idade: "25", cidade: "Sao Paulo" },
//   { nome: "Jessica", idade: "31", cidade: "Porto Alegre" },
//   { nome: "Mateus", idade: "15", cidade: "Campinas" },
//   { nome: "Joao", idade: "55", cidade: "Natal" },
//   { nome: "Maria", idade: "40", cidade: "Rio de Janeiro" },
//   { nome: "Lucas", idade: "20", cidade: "Belo Horizonte" },
//   { nome: "Daniela", idade: "35", cidade: "Fortaleza" },
//   { nome: "Samuel", idade: "18", cidade: "Brasília" },
// ];

// clientesAcima30 = 0;
// clientes.forEach((cliente) => {
//   if (cliente.idade > 30) {
//     clientesAcima30++;
//   }
// });
// console.log(clientesAcima30);

// Ex-10

// const vendas = [
//   { produto: "Arroz", quantidade: 2, valor: 3.99 },
//   { produto: "Feijão", quantidade: 1, valor: 5.99 },
//   { produto: "Leite", quantidade: 5, valor: 3.49 },
//   { produto: "Batata", quantidade: 10, valor: 2.99 },
//   { produto: "Refrigerante", quantidade: 8, valor: 8.99 },
//   { produto: "Massa", quantidade: 25, valor: 15.0 },
//   { produto: "Ovos", quantidade: 14, valor: 1.99 },
// ]

// let valorTotal = 0;
// vendas.forEach(venda => {
//   valorTotal += venda.quantidade * venda.valor;
// });

// console.log(valorTotal);

// Ex-11

// const pedidos = [
//   { cliente: "Paulo", produto: "Pizza", quantidade: "2" },
//   { cliente: "Jessica", produto: "Café", quantidade: "3" },
//   { cliente: "Mateus", produto: "Hamburguer", quantidade: "1" },
//   { cliente: "Joao", produto: "Pizza", quantidade: "1" },
//   { cliente: "Maria", produto: "Café", quantidade: "2" },
//   { cliente: "Maria", produto: "Hamburguer", quantidade: "4" },
//   { cliente: "Maria", produto: "Pizza", quantidade: "2" },
//   { cliente: "Joao", produto: "Café", quantidade: "1" },
//   { cliente: "Paulo", produto: "Hamburguer", quantidade: "3" },
// ];

// let totalPedidos = {};

// pedidos.forEach((pedido) => {
//   if (totalPedidos[pedido.cliente]) {
//     totalPedidos[pedido.cliente] += parseInt(pedido.quantidade);
//   } else {
//     totalPedidos[pedido.cliente] = parseInt(pedido.quantidade);
//   }
// });

// console.log(totalPedidos);

// Ex-12

// let estoque = [
//   { produto: "Queijo", quantidade: 15, minimo: 20 },
//   { produto: "Arroz", quantidade: 50, minimo: 20 },
//   { produto: "Feijão", quantidade: 7, minimo: 10 },
//   { produto: "Batata", quantidade: 10, minimo: 5 },
//   { produto: "Refrigerante", quantidade: 15, minimo: 10 },
// ];

// estoque.forEach((est) => {
//   if (est.quantidade < est.minimo) {
//     est.quantidade *= 2;
//   }
// });
// console.log(estoque);

// Ex-13

// let carrinho = {
//   itens: [
//     { nome: "Feijão", quantidade: 3, precoUnitario: 5.99 },
//     { nome: "Arroz", quantidade: 2, precoUnitario: 3.99 },
//     { nome: "Batata", quantidade: 1, precoUnitario: 2.99 },
//     { nome: "Refrigerante", quantidade: 5, precoUnitario: 8.99 },
//     { nome: "Café", quantidade: 4, precoUnitario: 4 },
//   ],
// };
// let totalCarrinho = 0;
// carrinho.itens.forEach((produto) => {
//   totalCarrinho += produto.quantidade * produto.precoUnitario;
// });
// console.log(`Valor total R$${totalCarrinho}`);

// Ex-14

// const empresa = {
//   departamentos: [
//     {
//       nome: "Logistica",
//       funcionarios: [
//         { nome: "Paulo", cargo: "Auxiliar", salario: 1800 },
//         { nome: "Jessica", cargo: "Gerente", salario: 3000 }
//       ],
//     },
//     {
//       nome: "Marketing",
//       funcionarios: [
//         { nome: "Maria", cargo: "Gerente", salario: 2500 },
//         { nome: "Joao", cargo: "Diretor", salario: 4000 }
//       ],
//     },
//     {
//       nome: "Vendas",
//       funcionarios: [
//         { nome: "Lucas", cargo: "Vendedor", salario: 2000 },
//         { nome: "Daniela", cargo: "Gerente", salario: 3500 }
//       ],
//     }
//   ],
// };

// for (const key of empresa.departamentos) {
//   console.log(`--Setor de ${key.nome}--`);
//   for (const funcionario of key.funcionarios) {
//     console.log(`${funcionario.nome} - ${funcionario.cargo}`);
//   }
// }

// Ex-15

// const transacoes = {
//   entrada: [
//     { data: "22/10/2014", valor: 300 },
//     { data: "15/12/2014", valor: 800 },
//     { data: "10/01/2015", valor: 250 },
//     { data: "05/03/2015", valor: 450 },
//   ],
//   saida: [
//     { data: "18/02/2015", valor: 150 },
//     { data: "25/04/2015", valor: 200 },
//     { data: "01/06/2015", valor: 100 },
//     { data: "15/07/2015", valor: 300 },
//   ],
// };
// let saldo = 0;
// transacoes.entrada.forEach((transacao) => {
//   saldo += transacao.valor;
// });
// transacoes.saida.forEach((transacao) => {
//   saldo -= transacao.valor;
// });

// console.log(saldo);
