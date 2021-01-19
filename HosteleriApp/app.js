const express = require('express')
const app = express();
const path = require('path');


app.get('/', (req, res) => {
  
  res.sendFile(path.join(__dirname + '\\public\\index.html'),function(error){
    if(error){
      res.status(404).send("<h2>error 404: No existe o no se encuentra el archivo \"index.html\"</h2>");
    }

  });
  
  


  
  
});
app.use(express.static(path.join(__dirname, "public"),{extensions: ['html']} ));

app.listen(8000, () => {
  console.log('La app está escuchando desde el puerto 8000!')
});
