const express = require('express');
const router = express.Router();
const alunosController = require('../controllers/alunos');

/* GET users listing. */
router.get('/', async (req, res) => {
  const alunos = await alunosController.listarTodos();
  res.render('alunos', {alunos});
});

router.post('/', async (req, res) => {
  const { nome, sobrenome, email, ano_matricula } = req.body;
  //validar joi

  await alunosController.cadastrarAluno({nome, sobrenome, email, ano_matricula});
  const alunos = await alunosController.listarTodos();

  res.render('alunos', {alunos});
});

router.get('/matricular/:id', async (req, res) => {
  const { id } = req.params;

  await alunosController.atualizarMatriculaAluno({id, ano_matricula: 2021});

  res.redirect('/alunos');
});

router.post('/atualizar/:id', async (req, res) => {
  const { id } = req.params;
  const {nome, sobrenome, email, ano_matricula} = req.body;

  await alunosController.atualizarAluno({id, nome, sobrenome, email, ano_matricula});

  res.redirect('/alunos');
});

module.exports = router;
