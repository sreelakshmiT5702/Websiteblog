const express = require('express');
const path = require('path');
// const fileupload = require('express-fileupload');

// <!--public folder path to this variable---!>

let initial_path = path.join(__dirname, "public/uploads");

// setup the server
const app = express();
app.use(express.static(initial_path));
// app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
})

app.listen("3000", () => {
    console.log('listening......');
})