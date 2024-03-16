import express from "express"

const app = express()
const port = 3000 ;

app.get ("/",(req, res) => {
    res.send("index sayfası")
})
app.listen(port,()=>{
    console.log('uygulama bu port adresinde çalışıyor : ${port}');
})