const { Comentario, Usuario, Post } = require("../models");
const bcrypt = require("bcrypt");
const AuthController = {
  showLogin: (req, res) => {
    res.render("auth/login");
  },

  showRegistro: (req, res) => {
    res.render("auth/register");
  },

  showHome: async (req, res) => {
    let posts = await Post.findAll({
      include: [
        { model: Comentario, as: "comentarios", include: "usuario" },
        "usuario",
      ],
    });

    // include: ["usuario"]
    // let comentarios = await Comentario.findAll({
    //   include: ["post", "usuario"],
    // });
    // .then((data) => {
    //   let posts = data.map((u) => u.toJSON());

    // });
    // console.log(posts);
    // return res.send(posts);
    res.render("index", { posts });
  },

  login: async (req, res) => {
    // pegar info do body
    let { email, senha } = req.body;

    // tentar carregar user
    let user = await Usuario.findOne({
      where: {
        email,
      },
    });

    //verificar se existe o user
    if (!user) {
      return res.redirect("/login?error=1");
    }

    // validar senha passada
    if (!bcrypt.compareSync(senha, user.senha)) {
      // return res.send("sucesso");
      return res.redirect("/login?error=1"); //senha ou email invalidos
    }
    //setar session
    req.session.usuario = user;
    //redirecionar para home

    res.redirect("/home");
  },

  registrar: async (req, res) => {
    let { email, nome, senha } = req.body;

    let user = Usuario.findOne({
      where: {
        email,
      },
    });

    if (email === user.email) {
      return res.redirect("/registro?error=3"); // email já existente
    }

    let hash = bcrypt.hashSync(senha, 10);

    await Usuario.create({
      nome,
      email,
      senha: hash,
    });

    res.redirect("/login");
  },
};

module.exports = AuthController;
