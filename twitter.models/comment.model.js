const mongoose = require("mongoose");
const commSchema = mongoose.Schema({
  user: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
  text: String,
  twit: {
    ref: "Twit",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Comment = mongoose.model("Comment", commSchema);

module.exports = Comment;
