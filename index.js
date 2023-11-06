const express = require('express')
const mongoose = require("mongoose");
const app = express()

app.use(express.json())
app.use(require("./routes/news.route.js"))
app.use(require("./routes/categories.route"))
app.use(require("./routes/comment.route"))

mongoose.connect("", {})
.then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

  app.listen(4000)