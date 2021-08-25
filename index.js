const db = require('./database/models');

const { log } = console;

const print = (param) => {
    const data = [param].flat().map((linhas) => linhas.dataValues)
    log(JSON.stringify(data, null, 2));
}

const run = async () => {
    const alunos = await db.Aluno.findAll({ include: ['Atendimentos']})


    print(alunos)
}

run()