const express = require("express");
const { PORT } = require("./config");

const bootstrap = async () => {
  const app = express();

  app.get("/", (req, res) => {
    return res
      .status(200)
      .json({ status: "TRUE", message: "Successfully working..." });
  });

  app.listen(PORT, () => {
    console.log(`Server started successfully on port: ${PORT}`);
  });
};

bootstrap();
