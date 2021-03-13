# 🧾 Teste de estágio
Repositório para o teste de estágio da @Nave.

## ♻ Instruções para os desafios
Para executar os desafios apenas clique no botão "Executar exercício"

Link do Sandbox: https://v5ysr.csb.app/

## 🔙 Instruções para a API

### 🔧 Tools
- [Node](https://nodejs.org/en/)
- [Knex](http://knexjs.org/)
- [PostgreSQL](https://www.postgresql.org)

### 👩‍💻 How to Setup
```
# Install dependencies
$ npm install
```

```
# Run migrations
$ npx knex migration:latest
```

```
# Run seeds
$ npx knex seed:run
```

### ☝ Requests
Para rodar todas as requests no insomnia só clicar no botão e importar.

<p align="center">
<a href="https://insomnia.rest/run/?label=API&uri=https%3A%2F%2Fraw.githubusercontent.com%2F404jv%2Fteste-estagio%2Fmain%2Fbackend%2FInsomnia-All_2021-03-12.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 🔴 Dificuldades
Todas as dificuldades que eu tive durante o desenvolvimento da API.

### ❓ Criar array em SQL
Essa foi muito nova pra mim, eu resolvi pesquisando no google e encontrei a resposta no famoso Stackoverflow, bem [aqui](https://stackoverflow.com/questions/48855076/how-can-we-create-integer-array-type-column-in-knex-migration/48855765).


### ❓ Cadastrar um naver
O problema em si não foi cadastrar o naver e sim colocar o ID dele nos projetos que o mesmo participou. Eu perguntei sobre o problema no discord da Rocketseat, porém a única pessoa que me respondeu não sabia muito sobre Knex e me disse que a solução que eu fiz não vai ser usada em uma aplicação de verdade e eu concordo 100%, então ainda estou curioso para aprender soluções melhores pois a minha foi esse monstro 👻 hahah:

```js
async store(req, res, next) {
  try {
    const { name, birthdate, admission_date, job_role, projects } = req.body;

    await knex('navers').insert({
      name, 
      birthdate, 
      admission_date, 
      job_role, 
    });
    
    const naverId = await knex('navers')
      .where({ name })
      .select('id')
      .first();

    const naverProjects = await knex('projects').whereIn('id', projects);

    for (i in naverProjects) {
      naverProjects[i].navers.push(naverId.id);

      await knex('projects')
        .update({ navers: naverProjects[i].navers })
        .where('id', naverProjects[i].id);
    }

    return res.status(201).json({
      name, 
      birthdate, 
      admission_date, 
      job_role, 
      projects,
    });
  } catch (error) {
      next(error);
  }
},
```

### ❓ Cadastrar um Project
Aqui eu tive o mesmo problema do anterior, pois ainda acho que eu poderia de alguma forma evitar algumas conexões com o banco de dados que acaba tirando performance da aplicação.

```js
const project = await knex('projects')
  .where({ id: project_id })
  .first();

const navers = await knex('navers')
  .whereIn('id', project.navers);
```
