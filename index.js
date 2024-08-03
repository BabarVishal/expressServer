const express = require("express");
const { DbConection } = require("./Db/db.conection");
const router = require("./routes/user.routes");
const app = express();
const PORT = 3005;

//DbConection..
DbConection()
.then(() => console.log("MongoDb Conected!"))
.catch((err) => console.log("Its not Conected", err))

//middleware..
app.use(express.json());

//routes..
app.use("/api/user", router)


app.listen(PORT, () => console.log(`Server has stated in PORT : ${PORT}`));