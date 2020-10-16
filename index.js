const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());





//Welcome Request

app.get('/', (request, response) => {
  response.send('Welcome to StarkFlow APIs')
});



//DB Connection

const { Pool } = require('pg');
const config = {
  user: 'diojuxqxtawoxn',
  host: 'ec2-3-229-210-93.compute-1.amazonaws.com',
  database: 'dfkvrn6j07ncvn',
  password: '82535dec6f79ccc8520c407d0a3bd5f1df8728ad3ec9909dc26faca1743bf825',
  port: 5432,
}

const pool = new Pool(config);
pool.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack);
});



//Get All Todos

app.get('/getAllTodos', (request, response) => {
  pool.query('SELECT * FROM ToDo', (error, result) => {
      if (error) throw error;

      response.send(result.rows);
  });
});



// Add a new Todo in the list
app.post('/addTodo', (request, response) => {
  var id = request.body.id;
  var title = request.body.title;
  var description = request.body.description;
  pool.query(`insert into ToDo (ID,title,description) VALUES(${id},'${title}','${description}')`, (error, result) => {
      if (error) throw error;

      response.status(201).send(`Todo added with ID: ${id}`);
  });
});






//Update Todo By Id 

app.post('/updateTodo', (request, response) => {
  var id = request.body.id;
  var title = request.body.title;
  var description = request.body.description;
  pool.query(`update ToDo set title = '${title}', description = '${description}' where id = ${id};`, (error, result) => {
      if (error) throw error;

      response.status(201).send(`Todo updated with ID: ${id}`);
  });
});






//Listening On Port

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
