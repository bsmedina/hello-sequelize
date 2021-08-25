const alunosModel = require('../models/alunos');

exports.listarTodos = () => alunosModel.listarTodos();

exports.cadastrarAluno = ({nome, sobrenome, email, ano_matricula}) => 
    alunosModel.cadastrarAluno ({nome, sobrenome, email, ano_matricula});

exports.atualizarMatriculaAluno = ({id, nome, sobrenome, email, ano_matricula}) =>
    alunosModel.atualizarAluno({id, nome, sobrenome, email, ano_matricula});
    
exports.atualizarAluno = ({id, nome, sobrenome, email, ano_matricula}) =>
    alunosModel.atualizarAluno({id, nome, sobrenome, email, ano_matricula});