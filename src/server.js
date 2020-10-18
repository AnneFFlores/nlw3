//importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages');

//iniciando express
const server = express()
server
      //utilizando os arquivos estáticos
      .use(express.static('public'))

      // configurar template engine
      .set('views', path.join(__dirname, "views"))
      .set('view engine', 'hbs')

      //criar uma rota
      .get('/', (req, res) => {
        const city = req.query.city
          return res.render('index', { city })
      })

// rotas da aplicação
.get('/', pages.index)
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)


// ligar o servidor 
server.listen(5500)
