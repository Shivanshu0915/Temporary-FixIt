const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const connectDB = require("./config/db");
const dotenv = require('dotenv');

//load env
dotenv.config();

// connection to mongoDB
connectDB()

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});