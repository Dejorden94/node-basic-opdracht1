const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Add username</title></head>')
        res.write('<body>');
        res.write('<h1>Greetings!</h1>');
        res.write('<form action="/create-user" method="POST"><input placeholder="Fill in username" type="text"><button type="submit">Send</button></form>')
        res.write('</body>');
        res.write('</html>');
    }
    if (url === '/create-user' && method === 'POST') {
        const username = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            username.push(chunk);
        });
        return req.on('end', () => {
            console.log(username);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
});

server.listen(3000);