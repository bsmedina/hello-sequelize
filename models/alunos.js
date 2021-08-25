const db = require('../database/models')

exports.listarTodos = () => 
db.Aluno.findAll().then((rows) => rows.map((row) => row.dataValues));

// exports.listarTodos = async () => {
//     const rows = await db.Aluno.findAll();
//     const alunos = rows.map((row) => row.dataValues);

//     return alunos
// }

exports.cadastrarAluno = ({nome, sobrenome, email, ano_matricula}) => 
    db.Aluno.create({nome, sobrenome, email, ano_matricula});

exports.atualizarMatriculaAluno = ({id, nome, sobrenome, email, ano_matricula}) => {
    db.Aluno.update({nome, sobrenome, email, ano_matricula}, {where: {id} });
}

exports.atualizarAluno = ({id, nome, sobrenome, email, ano_matricula}) => {
    db.Aluno.update({nome, sobrenome, email, ano_matricula}, {where: {id} });
}