const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const USERS = require('./server/router/users.route');

const AUTH = require('./server/router/auth.route');
const decentralization =require('./server/middlewares/auth.mdw'); // phân quyền
const { cloudinary } = require('./server/utils/cloudinary');
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

app.get('/api/images', async (req, res) => {
  const { resources } = await cloudinary.search
      .expression('folder:Complete_Javascript_Course_for_Beginners_with_jQuery_AJAX')
      .sort_by('public_id', 'asc')
      .execute();

  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
});

app.use('/api/users',decentralization, USERS );
app.use('/api/auth', AUTH );


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