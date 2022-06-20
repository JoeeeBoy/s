const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(require("./twitter.routes/user.route"))
app.use(require("./twitter.routes/twit.route"))
app.use(require("./twitter.routes/comment.route"))

mongoose
  .connect(
    "mongodb+srv://adlan:begaev@cluster0.uhqp6.mongodb.net/Twitter?retryWrites=true&w=majority"
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(3000, () => {
  console.log(`сервер с портом 3000 запущен`);
});
