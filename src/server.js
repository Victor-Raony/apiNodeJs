import http from 'node:http';

//Metodos: GET, POST, PUT, PATCH, DELETE
// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação especifica de um recurso no back-end
// DELETE => Deletar um recurso no back-end

const server = http.createServer((req, res) => {
  const { method, url } = req
  if (method === 'GET' && url === '/users') {
    return res.end('Listagem de usuarios')  
  } 
  if (method === 'POST' && url === '/users') {
    return res.end('Criação de usuarios')
  }
  return res.end('Teste!')
})

server.listen(3333)

