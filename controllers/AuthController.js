const {Usuario} = require('../models')
const bcrypt = require('bcrypt')

const AuthController = {
    
    showLogin: (req,res) => {
        res.render('auth/login');
    },

    showRegistro: (req,res) => {
        res.render('auth/register');
    },

    showHome: (req,res) => {
        //console.log(req.session.usuario);
        res.render('index');
    },

    login: async (req,res) => {
        // Lendo as infos do Body
        const {email,senha} = req.body;
        // tentar carregar um usuario
        const user = await Usuario.findOne({ where: { email }});
        //Verifica se existe usarui com o e-mail passado
        if(!user){
            res.redirect('/login?error=1');
        }
        
        // validar senha passada via post contra a guardada
        if(!bcrypt.compareSync(senha, user.senha)){
            res.redirect('/login?error=1');
        }

        // setar uma session com o usuario
        req.session.usuario = user;
        


        // redirecionar o suaurio para a rota '/home'
        res.redirect('/home');
    }


}

module.exports = AuthController;