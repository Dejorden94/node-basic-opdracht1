const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Add username</title></head>')
        res.write('<body>');
        res.write('<h1>Greetings!</h1>');
        res.write('<form action="/create-user" method="POST"><input name="username" placeholder="Fill in username" type="text"><button type="submit">Send</button></form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Users overview</title></head>');
        res.write('<body>');
        res.write('<h1>List of users</h1>');
        res.write('<ul><li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('</ul>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const username = [];
        req.on('data', (chunk) => {
            username.push(chunk);
        });
        req.on('end', () => {
            const parsdBody = Buffer.concat(username).toString();

            console.log(parsdBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }

};

module.exports = requestHandler;