import express from 'express'
import empleadosRoutes from './routes/empleados.routes.js'
import indexRoutes from './routes/index.routes.js'
const app = express()

app.use(express.json())//recibo datos y paso a json y se los pasa a las rutas para interoretar valores

app.use(indexRoutes)
app.use('/api', empleadosRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint no encontrado'
    })
})

export default app;