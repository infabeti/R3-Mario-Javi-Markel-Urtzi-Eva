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