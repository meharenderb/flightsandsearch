const express = require("express");
const { PORT } = require("./config");
const CityRepository = require('./repository/city-repository');

const bootstrap = async () => {
  const app = express();

  app.get("/", (req, res) => {
    return res
      .status(200)
      .json({ status: "TRUE", message: "Successfully working..." });
  });

  app.listen(PORT, async () => {
    console.log(`Server started successfully on port: ${PORT}`);

    // const repo = new CityRepository();
    // const result = repo.createCity({
    //   name: "Jammu & Kashmir"
    // })
    // console.log("Inserted: ", result);
    
  });
};

bootstrap();
