const express = require("express")
const mongoose = require("mongoose")
// const bodyParser = require("body-parser")
const PORT = 3010

const app = express()
// mongoose.connect("mongodb://localhost:27017/mydb", {
//   useNewUrlParser: "true",
// })
// mongoose.connection.on("error", err => {
//   console.log("err", err)
// })
// mongoose.connection.on("connected", (err, res) => {
//   console.log("mongoose is connected")
// })

// mongoose
// .connect('mongodb://localhost:27017/mydb', 
// {   
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// })
// .then(() => console.log("Database Connected"))
// .catch((err) => console.log(err, ' :: :: err'));

mongoose.connect('mongodb://0.0.0.0:27017/mydb', function (err) {
    if (err) throw err;
    console.log('Successfully connected');
  })

app.listen(PORT, () => {
  console.log(`app is listening to PORT ${PORT}`)
})

    