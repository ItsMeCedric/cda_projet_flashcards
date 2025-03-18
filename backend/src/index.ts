import db from "../models/index";
import app from "./app";
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//TODO: changer ça, lancer la commande `npx sequelize-cli db:migrate` à la place
db.sync();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
