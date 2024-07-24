import { Router } from 'express';
import { getEmpleados, postEmpleado, putEmpleado, deleteEmpleado, getEmpleado} from '../controllers/empleados.controller.js';
const router = Router();

router.get('/empleados', getEmpleados)

router.get('/empleados/:id', getEmpleado)

router.post('/empleados', postEmpleado)

router.patch('/empleados/:id', putEmpleado)

router.delete('/empleados', deleteEmpleado)
router.delete('/empleados/:id', deleteEmpleado)

export default router