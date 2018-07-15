const controllers = require('../controllers')
const auth = require('./auth')

module.exports = (app) => {
  app.get('/', controllers.home.index)
  app.get('/index.html', controllers.home.index)

  app.get('/users/register', controllers.users.registerGet)
  app.post('/users/register', controllers.users.registerPost)
  app.get('/users/login', controllers.users.loginGet)
  app.post('/users/login', controllers.users.loginPost)
  app.get('/users/logout', controllers.users.logout)

  app.get('/article/all', controllers.article.all)
  app.get('/article/view/:id', controllers.article.view)
  app.get('/article/create', auth.isAuthenticated, controllers.article.createGet)
  app.post('/article/create', auth.isAuthenticated, controllers.article.createPost)
  app.get('/article/edit/:id', auth.isAuthenticated, controllers.article.editGet)
  app.post('/article/edit/:id', auth.isAuthenticated, controllers.article.editPost)
  app.get('/article/history/:id', auth.isAuthenticated, controllers.article.history)
  app.get('/article/search', controllers.article.search)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}
