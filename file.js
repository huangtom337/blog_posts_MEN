//events
// let EventEmitter = require('events')

// class Person extends EventEmitter {
//     constructor(name) {
//         super()
//         this.name = name
//     }
// }

// const james = new Person('james')
// const tom = new Person('tom')
// const mary = new Person('mary')
// let people = [james, tom, mary]

// people.forEach(person => {
//     person.on('speak', (msg) => {
//         console.log(`${person.name} said ${msg}`)
//     })
// });

//read and write

let fs = require('fs')
let fsp = require('fs').promises

// let readMe = fs.readFileSync('readme.txt', 'utf8')
// fs.writeFileSync('writeme.txt', readMe)


//read files
// const readFiles = async(fileName) => {
//     let data = await fsp.readFile(fileName,'utf8')
    
//     return data
// }

// fsp.readFile('readme.txt', 'utf8').then(data => console.log(data))

//write files
// const writeFiles = async(fileName, data) => {
//     await fsp.writeFile(fileName, data)
// }

// writeFiles('writeme.txt', "hello")

// readFiles('readme.txt').then(data => fsp.writeFile('writeme.txt', data))


// fsp.rmdir('test').catch(err => console.log(err))

//streams and buffers
const readStream = fs.createReadStream('readme.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('writeme.txt')

readStream.on('data', chunk => {

    writeStream.write(chunk)
    console.log("chunk")
})



//piping
// readStream.pipe(writeStream)

