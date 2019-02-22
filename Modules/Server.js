module.exports.start = function(host = 'localhost', port = 8080)
{
	const http = require('http');

	const server = http.createServer((request, response) => {
		console.log(request);

	 	response.end('<h1>Aqui fica o que vamos enviar para o navegador como resposta!</h1>');
	});
	server.listen(port, host, () => {
	  	console.log(`Servidor rodando em http://${host}:${port}`);
	  	console.log('Para derrubar o servidor: ctrl + c');
	});
}
