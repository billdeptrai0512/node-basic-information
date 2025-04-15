const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    // set header content
    res.setHeader('Content-Type', 'text/html')

    let path = './html/'

    switch(req.url) {
        case '/':
            path += '/index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        case '/contact':
            path += 'contact.html'
            res.statusCode = 200
            break;
        default:
            path += '404.html'
            res.statusCode = 404
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        }

        res.end(data)

    })

});

server.listen(3000, 'localhost', () => {
    console.log('listen for request')
})