const Twit = require("../twitter.models/twit.model");
const Comment = require("../twitter.models/comment.model");

module.exports.twitController = {
  postTwit: async (req, res) => {
    const { userCreated, title, likes, comments } = req.body;
    try {
      await Twit.create({
        userCreated,
        title,
        likes,
        comments,
      });
      res.json(`Твит ${title} добавлен!`);
    } catch (error) {
      console.log(error);
    }
  },
  addToComm: async (req, res) => {
    const { user, text, twit } = req.body;
    try {
      await Twit.findByIdAndUpdate(req.params.id, {
        $push: {
          comments: await Comment.create({
            user,
            text,
            twit,
          }),
        },
      });
      res.json(`Комментарий добавлен!`);
    } catch (error) {
      console.log(error);
    }
  },
  addToLikes: async (req, res) => {
    try {
      await Twit.findByIdAndUpdate(req.params.id, {
        $push: { likes: req.body.likes },
      });
      res.json(`Лайк добавлен!`);
    } catch (error) {
      console.log(error);
    }
  },

  deleteTwit: async (req, res) => {
    try {
      await Twit.findByIdAndDelete(req.params.id);
      res.json(`Твит с id:${req.params.id} удален!`);
    } catch (error) {
      console.log(error);
    }
  },
  patchTwit: async (req, res) => {
    const { userCreated, title } = req.body;
    try {
      await Twit.findByIdAndUpdate(req.params.id, {
        userCreated,
        title,
      });
      res.json(`Твит с id:${req.params.id} изменен!`);
    } catch (error) {
      console.log(error);
    }
  },

  getTwit: async (req, res) => {
    try {
      res.json(
        await Twit.find({})
          .populate("userCreated", "name")
          .populate("likes", "_id")
          .populate("comments")
      );
    } catch (error) {
      console.log(error);
    }
  },

  getIdTwit: async (req, res) => {
    try {
      res.json(
        await Twit.findById(req.params.id)
          .populate("userCreated", "name")
          .populate("likes", "_id")
          .populate("comments")
      );
    } catch (error) {
      console.log(error);
    }
  },
};
