const fs = require('fs')

fs.writeFileSync('hello.txt', 'Hello, World!')
console.log('File written successfully')

fs.appendFileSync('hello.txt', '\nAppended text!')
console.log('Text appended successfully')

const data = fs.readFileSync('hello.txt', 'utf8')
console.log('File content:', data)

fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log('File content:', data)
})
console.log('File read successfully\n')
