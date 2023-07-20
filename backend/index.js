
import mongodb from "mongodb"
import dotenv from 'dotenv'
import app from "./server";

dotenv.config()

const MongoClient=mongodb.MongoClient
const port =process.env.PORT|| 8000

MongoClient.connect(
    process.env.RESTREVIEW_DB_URI,{
        poolSize:50, //amount of people that can connect at a time ,
        wtimeoutMS:2500,
        useNewUrlParse:true,
}
).catch(e=>{
    console.error(e.stack)
     process.exit(1)
    }
).then(async client =>{
app.listen(port,()=>{
     console.log(`app listening at ${port}`)
}
   
)
})

/* NOTE THE PROCESS FOR THIS CODE IS 

1 .FIRST CONNECT MOGODB  TO YOUR CLIENT THAT HAVE ACCESS [7-15]
2.  THEN CHECK IF ANY ERRORS THAT OCCURED WHIOLE CONNECTING YOUR CLIENT [17-21]
3.  THEN YOU START THE SERVER IF THERE IS NO ERROR  that OCCURES [21-27]

*/