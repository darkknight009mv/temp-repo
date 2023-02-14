

const http = require('http')
//req = request & res = response
const server = http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end('welcome to our home page')
   }
   else if(req.url === '/about'){
    res.end('here is our short history')
   }
  else{res.end(
    `<h1>OOps!<h1>
    <P>we can't seem to find the page yor are looking for <p>
    <a href="/">back to home</>`
   )}
})

server.listen(5500);