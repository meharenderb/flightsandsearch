const express = require("express");
const { PORT } = require("./config");
const ApiRoutes = require('./routes/index');
const bodyParser = require("body-parser");
const {City, Airport} = require('./models/index')

const bootstrap = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  // Cities along with its related airports
  // const cities = await City.findAll({include: Airport})
  // console.log("cities ",cities);

  // A city along with related airports
  // const city = await City.findByPk(1, {include: Airport, attributes: {exclude: ['createdAt', 'updatedAt']}});

  // console.log("city & airport ",JSON.stringify(city));
  
  
  app.get("/", (req, res) => {
    return res
      .status(200)
      .json({ status: "TRUE", message: "Successfully working..." });
  });

  app.use('/api', ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started successfully on port: ${PORT}`);    
  });
};

bootstrap();
