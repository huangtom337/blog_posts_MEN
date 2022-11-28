const http = require('http')
const fsp = require('fs/promises')
const _ = require('lodash')

const server = http.createServer((req, res) => {
    
    //lodash
    const num = _.random(0,20)
    
    const greet = _.once(() => {
        console.log('hello')
    })
    


    res.writeHead(200, {'Content-Type':'text/html'})

    let path = "./views/"

    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        case '/about-me':
            res.writeHead(302, {location: 'about'})
            res.end()
        default:
            path += '404.html'
            res.statusCose = 404
    }

    fsp.readFile(path).then(data => {
        res.write(data)
        res.end()
    }).catch(err => {
        console.log(err)
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listening for request')
})



