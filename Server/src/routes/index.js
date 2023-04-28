const {login} = require('../controllers/login');
const {getCharById} = require('../controllers/getCharById');

const router = require('express').Router();

router.get('/character/:id', (req, res) =>{
getCharById(req,res);
});

router.get('/login', (req, es) =>{
    login(req,res);
    });
// FORMA FACIL DE LOGIN
 //router.get('/login', login);

router.post('/fav', (req, res)=>{
    postFav(req,res);
});

router.delete('/fav:id', (req, res)=>{
    deleteFav(req,res);
});

module.exports = router;
