/*
const fs = require('fs');
fs.readFileSync();
*/
//blow is same syntax as upper
const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8');
//console.log(first, second);
console.log('done with this task');

writeFileSync('./content/result-sync.txt',
`here is the result ${first}, ${second}`,
{flag: 'a'}
)

console.log('starting next task');
