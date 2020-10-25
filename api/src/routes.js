const express = require('express');
const routes = express.Router();
//const jwt = require("jsonwebtoken");
//const fs = require("fs");

const AlunoController = require('./controllers/AlunoController')
//routes.get('/alunos/:id', AlunoController.showone);
routes.get('/alunos/:nome', AlunoController.showOneByName);
routes.get('/alunos', AlunoController.index);
routes.post('/alunos/add', AlunoController.store);
routes.put('/alunos/update/:id', AlunoController.update);
routes.delete('/alunos/delete/:id', AlunoController.delete);

routes.get('/treinos/:nome', AlunoController.showOneByName);
routes.get('/treinos', AlunoController.index);
routes.post('/treinos/add', AlunoController.store);
routes.put('/treinos/update/:id', AlunoController.update);
routes.delete('/treinos/delete/:id', AlunoController.delete);

routes.get('/exercicios/:nome', AlunoController.showOneByName);
routes.get('/exercicios', AlunoController.index);
routes.post('/exercicios/add', AlunoController.store);
routes.put('/exercicios/update/:id', AlunoController.update);
routes.delete('/exercicios/delete/:id', AlunoController.delete);


// function isAuthenticated(req, res, next) {
//     if (typeof req.headers.authorization !== "undefined") {
//         // retrieve the authorization header and parse out the
//         // JWT using the split function
//         let token = req.headers.authorization.split(" ")[1];
//         let privateKey = fs.readFileSync('./src/private.pem', 'utf8');
//         // Here we validate that the JSON Web Token is valid and has been 
//         // created using the same private pass phrase
//         jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {
            
//             // if there has been an error...
//             if (err) {  
//                 // shut them out!
//                 res.status(500).json({ error: "Not Authorized" });
//                 throw new Error(err);
//             }
//             // if the JWT is valid, allow them to hit
//             // the intended endpoint
//             return next();
//         });
//     } else {
//         // No authorization header exists on the incoming
//         // request, return not authorized and throw a new error 
//         res.status(500).json({ error: "Not Authorized" });
//         throw new Error("Not Authorized");
//     }
// }

module.exports = routes;