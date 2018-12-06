const routes = require('express').Router()
const fs = require('fs')
const homeController = require('./controllers/home.controller');
const uploadsController = require('./controllers/uploads.controller');
const controllersFolder = './controllers'


// Map each controller to a route with the same name
fs.readdirSync(controllersFolder).forEach(file => {
    let match = file.match(/^(.+)\.controller\.js$/)
    if (match) {
        let routeName = `/${match[1]}`
        let controller = require(`${controllersFolder}/${file}`); // eslint-disable-line
        routes.use(routeName, controller)
    }
})

routes.use('/', homeController);
routes.use('/upload', uploadsController);

module.exports = routes