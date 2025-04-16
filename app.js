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

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method)

//     // set header content
//     res.setHeader('Content-Type', 'text/html')

//     let path = './html/'

//     switch(req.url) {
//         case '/':
//             path += '/index.html'
//             res.statusCode = 200
//             break;
//         case '/about':
//             path += 'about.html'
//             res.statusCode = 200
//             break;
//         case '/contact':
//             path += 'contact.html'
//             res.statusCode = 200
//             break;
//         default:
//             path += '404.html'
//             res.statusCode = 404
//             break;
//     }

//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.log(err)
//             res.end()
//         }

//         res.end(data)

//     })

// });

// server.listen(3000, 'localhost', () => {
//     console.log('listen for request')
// })