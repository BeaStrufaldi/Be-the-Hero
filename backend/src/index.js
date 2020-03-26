/*Metodos HTTP :
Get = buscar uma informação do backend
Post = cria uma informação do backend
Put = Altera uma informação do backend
Delete = Deleta uma informação do backend

Tipos de parâmetros:

Query params: parametros nomeados enviados na rota após o ? (Filtro, paginação)
Route params: parametros utilizado para identificar recursos, usa o id
Request Body: Corpo da requisição utilizado para criar ou alterar recursos

*/


const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json()); //usado para o código entender a requisição
app.use(routes);



app.listen(3333);