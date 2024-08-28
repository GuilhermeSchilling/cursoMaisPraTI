let professor = {
    nome: "Carlos",
    materia: "Fisica",
    grades: {
        Ana: 7,
        Bernardo: 8,
        Cauan: 5,
        Daniela: 2,
    },
};

let somaNotas = 0;
let countAlunos = 0;

for (let aluno in professor.grades) {
    somaNotas += professor.grades[aluno];
    countAlunos++;
}

let avg = somaNotas / countAlunos;

// if (avg >= 6) {
//     console.log(
//         `O professor ${professor.nome} passou toda turma e teve a média da turma em ${avg}`
//     );
// } else {
//     console.log(
//         `O professor ${professor.nome} reprovou toda turma e teve a média da turma em ${avg}`
//     );
// }

// --------------------------------------------------
/*
    Objetivo: Verificar e listar livros publicados antes de 2000.
    Use um loop for...of para iterar sobre o array biblioteca.
    Imprima o título e o ano dos livros que atendem a essa condição.
*/

const library = [
    { title: "O Hobbit", author: "J. R. R. Tolkien", year: 1925 },
    { title: "Harry Potter: Prisioneiro de Azkaban", author: "J. K. Rolling", year: 1999 },
    { title: "Nárnia", author: "C. S. Lewis", year: 2010 }
]

// for(let book of library){
//     if(book.year < 2000) {
//         console.log(`O livro ${book.title}, escrito por ${book.author}, foi publicado em ${book.year}.`)
//     }
// }


/*
    Objetivo: Contar a quantidade de filmes por gênero.
    Use o método forEach para iterar sobre o array filmes.
    Para cada filme, verifique se o gênero já existe no objeto de contagem. 
    Se existir, incremente a contagem; se não, adicione o gênero ao objeto com a contagem inicial de 1.
*/

// let movies = [
//     {title: 'A Bela e a fera', genre: 'Acao'},
//     {title: 'A Bela e a fera', genre: 'Acao'},
//     {title: 'A Bela e a fera', genre: 'Terror'},
//     {title: 'A Bela e a fera', genre: 'Suspense'}
// ]

// let genreCount = {}

// movies.forEach(movie => {
//     if(genreCount[movie.genre]){
//         genreCount[movie.genre]++
//     }else {
//         genreCount[movie.genre] = 1
//     }
// })

// for(let genre in genreCount){
//     console.log(`${genreCount[genre]} de ${genre}`)
// }