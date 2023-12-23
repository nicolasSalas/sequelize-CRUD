import {Router} from 'express'
import {getUsuarios , createUsuario,getUsuarioWithId} from '../controllers/usuario.js'
const router  = Router()

router.get('/getUsuario',getUsuarios)
router.get('/getUsuario/:id',getUsuarioWithId)
router.post('/createUsuario',createUsuario)
router.put('/usuario/:id')
router.delete('/usuario/:id')

export default router