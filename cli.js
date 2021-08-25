const db = require('./database/models');
const {Op} = require('sequelize');

const findAlunos = async () => {
    
    const encontrarAlunos = await db.Aluno.findAll();

    const encontrarAluno = await db.Aluno.findOne({
        where: {
            nome: "Danila"
        }
    });

    const encontrarAlunoById = await db.Aluno.findByPk();

    const encontrarAlunoPelaInicial = await db.Aluno.findAll({
        where: {
            nome: {
                [Op.like]: 'a%'
            }
        }
    });

    const encontrarAlunosOrdenados = await db.Aluno.findAll({
        order: [
            ['nome', 'ASC']
        ],
        limit: 3,
        offset: 1
    })

    console.log(encontrarAlunos);
}

findAlunos();