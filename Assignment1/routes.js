const fs = require('fs');
<!--comment-->

const requestHandler = (request, response) => {
    const url = request.url;
    const method = request.method;

    if(url === '/'){
        response.write('<html>');
        response.write('<body><h1>Welcome to our Home Page</h1>');
        response.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>');
        response.write('</body>');
        response.write('</html>');
    }
    if(url ==='/users'){
        fs.readFile('./users.txt','utf8',function(err, contents) {
            response.write('<html>');
            response.write('<body><h2>List of users:</h2><br>');
            response.write(contents);
            response.write('<br><br><form action="/" method="POST"><button type="submit">Home</button><form></body>');
            response.write('</html>');
        });
    }
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        request.on('data', (chunk) =>{
            console.log(chunk);
            body.push(chunk);
        });

        return request.on('end', () => {
            const wholeInput = Buffer.concat(body).toString();
            const message = wholeInput.split('=')[1];
            let stream = fs.createWriteStream('users.txt', {flags:'a'});
            stream.write(message + "\n");
            response.setHeader('Location','/success');
            response.write('<html><body><h2>Thank you for the input!</h2><form action="/" method="POST"><button type="submit">Enter more names</button></form><form action="/users" method="POST"><button type="submit">See the list of users</button></form></body></html>');
            return response.end();

        });
    }

}

module.exports = requestHandler;
