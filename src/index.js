const express = require("express");
const { PORT } = require("./config");
const ApiRoutes = require('./routes/index');
const bodyParser = require("body-parser");
const bootstrap = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

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
