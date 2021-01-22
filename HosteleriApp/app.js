const express = require('express')
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "public"),{extensions: ['html']} ));

//Error pagina principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '\\public\\index.html'),function(error){
    if(error){
      res.status(404).send("<h2>error 404: No existe o no se encuentra la página principal</h2>");
    }

  });
  
});

// Error index
app.get('/restaurantes', (req, res) => {
	  res.sendFile(path.join(__dirname + '\\public\\restaurantes.html'),function(error){
	    if(error){
	      res.status(404).send('<h2>error 404: No existe o no se encuentra el archivo "restaurantes.html"</h2>');
	    }

	  });
  
});

//Error cafeterias
app.get('/cafeterias', (req, res) => {
  res.sendFile(path.join(__dirname + '\\public\\cafeterias.html'),function(error){
    if(error){
      res.status(404).send('<h2>error 404: No existe o no se encuentra el archivo "cafeterias.html"</h2>');
    }

  });
  
});

// Error bares
app.get('/bares', (req, res) => {
  res.sendFile(path.join(__dirname + '\\public\\bares.html'),function(error){
    if(error){
      res.status(404).send('<h2>error 404: No existe o no se encuentra el archivo "bares.html"</h2>');
    }

  });
  
});


app.listen(8000, () => {
  console.log('La app está escuchando desde el puerto 8000!')
});
