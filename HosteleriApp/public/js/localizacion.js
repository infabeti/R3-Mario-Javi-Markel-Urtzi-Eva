// Insertar lo necesario de Google para los mapas
var script = document.createElement('script');
script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBEqb60MSN1_shPGAY5H9rcHv0L71eKCRw&callback=MapsListo";
script.defer = true;
document.head.appendChild(script);
//-----------------------------ATENCION---------------------------------
//CUANDO SE TERMINA DE CARGAR EL API SE LLAMARA A LA FUNCION MapsListo()
//DEL HTML QUE CARGARA LOS MAPAS. LOS MAPAS FUERA DE LA FUNCION NO
//SERAN CARGADOS Y LANZARAN UN ERROR.


// Inicializar mapa
function initMap(elemento,lat,lng) {
  const pos = { lat, lng };
  const map = new google.maps.Map(elemento, {
    zoom: 18,
    center: pos,
  });
  const marker = new google.maps.Marker({
    position: pos,
    map: map,
  });
}

//Distancia entre dos coordenadas (en KM)
function distanciaPuntos(lat1,lon1,lat2,lon2)
{
	var R = 6371e3;//Radio de la tierra
	var Ang1 = lat1 * Math.PI/180;
	var Ang2 = lat2 * Math.PI/180;
	var A1 = (lat2-lat1) * Math.PI/180;
	var A2 = (lon2-lon1) * Math.PI/180;

	var a = Math.sin(A1/2) * Math.sin(A1/2) +
			  Math.cos(Ang1) * Math.cos(Ang2) *
			  Math.sin(A2/2) * Math.sin(A2/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

	return ((R * c)/1000).toFixed(2)+" Km";
}

// Distancia entre el cliente y un punto del mapa (Las coordenadas del cliente search
// reciben de la API, los artgumentos son el elemento donde escribiremos el resultado 
// y las coordenadas del lugar deseado)(KM)
function distanciaCliente(elemento,lat,lon)
{
	if (!navigator.geolocation){
		Console.log("Geolocalizacion no soportada por tu navegador");
		elemento.html("Recarga la pagina y permite la geolocalizacion para ver la distancia");
	}
	
	var distancia;
	
	var options = {
	  enableHighAccuracy: true,
	  maximumAge: 0
	};

	function success(pos) {
	  var crd = pos.coords;
	  console.log('Latitude : ' + crd.latitude);
	  console.log('Longitude: ' + crd.longitude);
	  console.log('More or less ' + crd.accuracy + ' meters.');
	  elemento.html(distanciaPuntos(crd.latitude,crd.longitude,lat,lon));
	};

	function error(err) {
	  console.warn('ERROR(' + err.code + '): ' + err.message);
	};

	navigator.geolocation.getCurrentPosition(success, error, options);
}