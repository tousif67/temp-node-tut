const http= require('http');

const server= http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end("welcome to our homepage")
    }
    if(req.url ==='/about'){
        res.end("here is a short history ")
    }
    res.end(`
    <h1>OOPS</h1>
    <p>we can't find your page which you are looking for </p>
    <a href="/">back home</a>
     `)
    
})

server.listen(5500)