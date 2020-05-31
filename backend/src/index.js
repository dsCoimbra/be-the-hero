const express = require('express'); 
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recursos
 * 
 */

 /**
  * Metodos HTTP
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE:  Deletar uma informação no back-end 
  */

/**
 * Tipos de parametros:
 * 
 * Query params: parametros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route params: parametros utilizados para identificar recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

/**
* SQL: MySql, SQLite, PostegreeSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, etc 
*/

/** 
 * Driver : SELECT * FROM users
 * Query Builder: table('users).select('*').where()
 */




app.listen(3000);