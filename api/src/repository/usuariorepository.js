server.post ('/usuario/login' , async(req,resp) => {
    try {
        const {email ,senha }= req.body;
        const resposta= await login (email , senha );[]

        if(!resposta)
                   throw

    }
    catch(err){
        resp.send({
            erro : err.mensagem
        })
    }
});