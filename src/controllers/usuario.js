import {User} from '../model/usuario.js'
export const getUsuarios = async (req,res) => {
    try {
        const data = await User.findAll();
        console.log("DATA: " , JSON.stringify(data))
        return res.status(200).json({responseCode:200,message:"Success request",dataValues:data})
    } catch (error) {
        return res.status(500).json({message:"Error executing request"})
    }
    
    
}


export const getUsuarioWithId = async (req,res) => {
    console.log("id",req.params.id)
    try {
        const usrid = req.params.id
        console.log("usrid",req.params.id)
        const data = await User.findAll({
            where: {
                usrid: usrid
            }
        });
        console.log("DATA: " , JSON.stringify(data))
        return res.status(200).json({responseCode:200,message:"Success request",dataValues:data})
    } catch (error) {
        return res.status(500).json({responseCode:200,message:"Error executing request:"})
    }
    
    
}

export const createUsuario = async (req,res) => {
    try {
        console.log(req.body)
        const {usrempid,usrrut,usrlogin,usrclave,usremail} = req.body
        const newUser = await User.create({
            usrempid:usrempid,
            usrrut:usrrut,
            usrlogin:usrlogin,
            usrclave:usrclave,
            usremail:usremail
        })
        console.log(newUser)
        res.send("Usuario Creado")
    } catch (error) {
        return res.status(500).json({message:"Error executing request"})
    }
    
}