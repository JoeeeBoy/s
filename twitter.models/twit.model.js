const mongoose = require("mongoose");
const twitSchema = mongoose.Schema({
  userCreated: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
  title: String,
  likes: [
    {
      ref: "User",
      type: mongoose.SchemaTypes.ObjectId,
    },
  ],
  comments: [
    {
      ref: "Comment",
      type: mongoose.SchemaTypes.ObjectId,
    },
  ],
});

const Twit = mongoose.model("Twit", twitSchema);

module.exports = Twit;
