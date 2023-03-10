import http from 'node:http';

//Metodos: GET, POST, PUT, PATCH, DELETE
// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação especifica de um recurso no back-end
// DELETE => Deletar um recurso no back-end

// Stateful = aplicação salva em memoria 
// Stateless = aplicação não salava em memoria 

// JSON - JavaScript Object Notation

// Cabeçalhos (Requisição/respostas ) => Metadados

// HTTP - Status Code (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req
  if (method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-Type', 'application/json')
    .end(JSON.stringify(users))  
  } 
  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Don',
      email: 'johndoe@example.com',
    })
    return res.writeHead(201).end()
  }
  return res.writeHead(404).end('')
})

server.listen(3333)

