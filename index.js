const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
let abc = [];
let name1;
let name2;

var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());





//Hello World

app.get('/', (request, response) => {
  response.send('Welcome to Doctor Plus APIs')
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


// app.get('/loginn', function (req, res) {
//   // First read existing users.
//   pool.query(`SELECT * FROM dashboard WHERE id = '1' ;`, function(err, res) {
//     if(err) {
//         return console.error('error running query', err);
//     }

//     console.log(+JSON.stringify(res.rows[0]));
//     name1 = JSON.stringify(res.rows[0]);
    
// });
// res.send(name1);
// })


app.get("/login", function(req, res) { 
  var username = req.body.num1; 
  var num2 = req.body.num2; 
  
  pool.query(`SELECT * FROM login_tripaxy WHERE name = ${username} ;`, function(err, res) {
    if(err) {
        return console.error('error running query', err);
    }

    console.log(+JSON.stringify(res.rows[0]));
    name1 = JSON.stringify(res.rows[0]);
   
});
res.send(name1);
})


// // Profile Info

// app.get('/profile', function (req, res) {
//   // First read existing users.
//   pool.query(`SELECT * FROM login WHERE id = '1' ;`, function(err, res) {
//     if(err) {
//         return console.error('error running query', err);
//     }

//     console.log(+JSON.stringify(res.rows[0]));
//     name2 = JSON.stringify(res.rows[0]);
    
// });
// res.send(name2);
// })



// // Users

// app.get('/users', function (req, res) {
//   // First read existing users.
//   pool.query(`SELECT * FROM patientinfo WHERE statusofvisit = 'p';`, function(err, res) {
//     if(err) {
//         return console.error('error running query', err);
//     }

//     console.log(+JSON.stringify(res.rows));
//     name2 = JSON.stringify(res.rows);
    
// });
// res.send(name2);
// })




// // Completed Users

// app.get('/completedUsers', function (req, res) {  
//   // First read existing users.
//   pool.query(`SELECT * FROM patientinfo WHERE statusofvisit = 'd';`, function(err, res) {
//     if(err) {
//         return console.error('error running query', err);
//     }

//     console.log(+JSON.stringify(res.rows));
//     name2 = JSON.stringify(res.rows);
    
// });
// res.send(name2);
// })




// //Get Info By id

// app.get('/getinfobyid/:id', function (req, res) {
//   // First read existing users.
//   pool.query(`SELECT * FROM patientinfo WHERE id = ${req.params.id};`, function(err, res) {
//     if(err) {
//         return console.error('error running query', err);
//     }

//     console.log(+JSON.stringify(res.rows));
//     name2 = JSON.stringify(res.rows);
    
// });
// res.send(name2);
// })


// //Update Status of Visit By Id

// app.get('/updateStatusById/:id', function (req, res) {
//   // First read existing users.
//   console.log("inside")
//   pool.query(`select updateVisitFlag(${req.params.id});`, function(err, res) {
//     if(err) {
//         return console.error('error running query', err);
//     }

   
//     //name2 = JSON.stringify(res.rows);
    
// });
// res.send("Done")
// })




// //Get By ID

// app.get('/:id', function (req, res) {
//   // First read existing users.
//   pool.query(`SELECT name FROM products WHERE id = ${req.params.id}`, function(err, res) {
//     if(err) {
//         return console.error('error running query', err);
//     }

//     console.log("New Output"+res.rows[0].name);
//     name1 = res.rows[0].name;
    
// });
// res.send("Name is: "+name1);
// })


// //Add User

// app.get('/api/v1/addUser/', function (req, res) {
//   pool.query(`INSERT INTO products (product_no, name,price) VALUES ('30', 'Ranjana','10')`, function(err, res) {
//     if(err) {
//         return console.error('error running query', err);
//     }
//     console.log('Output:', res);
//    //  abc = res.rows[0].name;
 
// });
// if(res){
//   res.send("Added Record In Db");
// }

// })


// //Update 


// app.get('/api/v1/updateUser/:id', function (req, res) {
//   pool.query(`UPDATE products SET name='Anant' WHERE id = ${req.params.id}`, function(err, res) {
//     if(err) {
//         return console.error('error running query', err);
//     }
//     console.log('Output:', res);
//    //  abc = res.rows[0].name;
//   });
// if(res){
//   res.send("Updated Record In Db");
// }

// })






//Listening On Port

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});

// const express = require('express');
// const app = express();
// var cors = require('cors');

// app.use(
//     cors({
//         credentials: true,
//         origin: true
//     })
// );
// app.options('*', cors());

// app.get('/', (req, res) => res.send('Working!!!'));

// app.listen(process.env.PORT || 3000, function() {
//     console.log('server running on port 3000', '');
//});