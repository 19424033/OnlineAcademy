const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();



const PORT = process.env.PORT || 4000;

if(process.env.NODE_ENV !== 'test') {
  app.use(morgan('combined')); 
}


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (request, respond) => {
  respond.status(200).json({
    message: "Welcome to Project Support",
  });
});


app.get('/err', function (req, res) {
  throw new Error('Error!');
});

app.use(function (req, res, next) {
  res.status(404).send({
    error_message: 'Endpoint not found!'
  })
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send({
    error_message: 'Something broke!'
  });
});



app.listen(PORT, function () {
  console.log(`Server is running on Port: http://localhost:${PORT}`);
});

module.exports = app;