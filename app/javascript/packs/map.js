
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('[data-behavior="map"]')

  if (!el) {
    return
  }
  
  mapboxgl.accessToken = 'pk.eyJ1IjoicGFzY2FsbGFsaWJlcnRlIiwiYSI6ImNrYTYzenkwZTAycG0yd3MwbHNpZGYzZTUifQ.m5Op1SQuKoQrxKLrae7zsw';
  
  var map = new mapboxgl.Map({
    container: el,
    style: 'mapbox://styles/pascallaliberte/cka64b87u07fh1jnwa42b0brx',
    center: [-75.687, 45.422],
    zoom: 12
  });
})

