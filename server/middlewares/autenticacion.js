const jwt=require('jsonwebtoken');

//==================
// verificar token
//==================

let verficaToken=(req, res, next)=>{

    let token=req.header('token');

    //verifica si el token es correcto

    jwt.verify(token, process.env.SEED,(err, decoded)=>{

        if(err){
            return res.status(401).json({

                ok:false,
                err:{
                    message:'token no valido',
                }
            });
        }


        req.usuario=decoded.usuario;

        next();
    })

    // res.json({
    //     token:token
    // });
   
}


//==================
// verificar adminrole
//==================

let verificaAdminRole=(req, res, next)=>{

    let usuario=req.usuario;

    console.log( "here",usuario.role);
    let {role}=usuario;
    console.log(role);

    if(role==='ADMIN_ROLE'){
        next();
        return;


    }else{

    return res.json({
        ok: false,
        err:{
            message:'El usuario no es administrador'
        }
    })

}

  
}

module.exports={

    verficaToken,
    verificaAdminRole
}