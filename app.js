var express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

var app = express();
app.use(cors());
app.use(express.json());

//mongodb connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://AkhilaP:cyg4elnmZYfslmqv@cluster0.mvva0vw.mongodb.net/ResumeBuilder?retryWrites=true&w=majority"
  );
}

//routes
const ResumeRoutes = require("./routes/ResumeRoutes");
app.use("/resume",ResumeRoutes);

//port number
const port = 8081;

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

module.exports = app;
