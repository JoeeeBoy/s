const User = require("../twitter.models/user.model");
const Twit = require("../twitter.models/twit.model");

module.exports.userController = {
  postUser: async (req, res) => {
    const { name, saved } = req.body;
    try {
      await User.create({
        name,
        saved,
      });
      res.json(`Пользователь ${name} добавлен!`);
    } catch (error) {
      console.log(error);
    }
  },
  addToSave: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $push: { saved: req.body.saved },
      });
      res.json(`Добавлено в сохраненки!`);
    } catch (error) {
      console.log(error);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json(`Пользователь с id:${req.params.id} удален!`);
    } catch (error) {
      console.log(error);
    }
  },
  patchUser: async (req, res) => {
    const { name, saved } = req.body;
    try {
      await User.findByIdAndUpdate(req.params.id, {
        name,
        saved,
      });
      res.json(`Пользователь с id:${req.params.id} изменен!`);
    } catch (error) {
      console.log(error);
    }
  },

  getUser: async (req, res) => {
    try {
      res.json(await User.find({}).populate("twits"));
    } catch (error) {
      console.log(error);
    }
  },

  getIdUser: async (req, res) => {
    try {
      res.json(await User.findById(req.params.id).populate("twits"));
    } catch (error) {
      console.log(error);
    }
  },
  addTwit: async (req, res) => {
    const { userCreated, title } = req.body;
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $push: {
          twits: await Twit.create({
            userCreated,
            title,
          }),
        },
      });
      res.json("asd");
    } catch (e) {
      res.json(e);
    }
  },
};
