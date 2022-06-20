const Comment = require("../twitter.models/comment.model");

module.exports.commController = {
  postComment: async (req, res) => {
    const { user, text, twit } = req.body;
    try {
      await Comment.create({
        user,
        text,
        twit,
      });
      res.json(`коментарий ${user} добавлен!`);
    } catch (error) {
      console.log(error);
    }
  },

  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndDelete(req.params.id);
      res.json(`коментарий с id:${req.params.id} удален!`);
    } catch (error) {
      console.log(error);
    }
  },
  patchComment: async (req, res) => {
    const { user, text, twit } = req.body;
    try {
      await Comment.findByIdAndUpdate(req.params.id, {
        user,
        text,
        twit,
      });
      res.json(`коментарий с id:${req.params.id} изменен!`);
    } catch (error) {
      console.log(error);
    }
  },

  getComment: async (req, res) => {
    try {
      res.json(
        await Comment.find({})
          .populate("user", "name")
          .populate("twit", "title")
      );
    } catch (error) {
      console.log(error);
    }
  },

  getIdComment: async (req, res) => {
    try {
      res.json(
        await Comment.findById(req.params.id)
          .populate("user", "name")
          .populate("twit", "title")
      );
    } catch (error) {
      console.log(error);
    }
  },
};
