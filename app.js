const http = require('http');
const fs = require('fs')

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    fs.readFile('./html/index.html', (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.end(data)
        }
    })
})

app.get("/about", (req, res) => {
    fs.readFile('./html/about.html', (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.end(data)
        }
    })
})

app.get("/contact", (req, res) => {
    fs.readFile('./html/contact.html', (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.end(data)
        }
    })
})

app.use((req, res) => {
    fs.readFile('./html/404.html', (err, data) => {
        if (err) {
            res.status(404).send("404 - Page Not Found");
        } else {
            res.status(404).end(data);
        }
    });
});

const PORT = 3000

app.listen(PORT, () => {
    console.log(`${PORT} is listening`)
})
