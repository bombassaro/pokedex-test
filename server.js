const app = require('express')()
const parser = require('body-parser')
const cors = require('cors')
const next = require('next')
const server = require('http').Server(app)
const routes = require('./server/routes')

const nextApp = next({dev: true})
const nextHandler = nextApp.getRequestHandler()

const {port} = require('./config.js')
// next prepare
nextApp.prepare().then(() => {
	// react routes
	app.use(cors())
	app.use(parser.json())
	app.use(parser.urlencoded({extended: true}))
	app.use('/api', routes)

	app.get('*', (req, res) => {
		return nextHandler(req, res)
	})
	server.listen(port, (err) => {
		if (err) throw err
		console.log(`> Ready on localhost:${port}`)
	})
})