// a.js
let mod = require('./b1.js')
console.log('a.js-1', mod.count)
mod.plusCount()
console.log('a.js-2', mod.count)
setTimeout(() => {
    mod.obj = 3
    console.log('a.js-3',mod.obj)
}, 2000)