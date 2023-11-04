import fs from 'fs'

console.log('Start');
fs.appendFile('my-file.txt', 'File creates Node.js', err => {
    if(err) throw new Error(err)
    console.log('File saved');
})
console.log('Finish');