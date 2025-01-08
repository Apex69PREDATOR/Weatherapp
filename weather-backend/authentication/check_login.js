const app=require("express")
const Router=app.Router()
const jwt=require("jsonwebtoken")

Router.get('/',async (req,res)=>{
    const token=req.headers.authorization.split(' ')[1]
    jwt.verify(token,`weatheraxos`,(error,decoded)=>{
        if(error){
            
            return res.status(401).json({success:false});
            
        }
        else{

            return res.status(200).json({success:true})
        }
    })
})
module.exports=Router