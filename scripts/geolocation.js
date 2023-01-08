function getCurrentLocation() {
  if (!navigator.geolocation) {
    console.log('Geolocation is not supported by this browser.');
    return;
  }
  navigator.geolocation.getCurrentPosition(showPosition, handleLocationError, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  });
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

  const mapOptions = {
    center: { lat: latitude, lng: longitude },
    zoom: 15
  };
  const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  const marker = new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: map
  });
}

function handleLocationError(error) {
  console.log(error.message);
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log('User denied the request for geolocation.');
      break;
    case error.POSITION_UNAVAILABLE:
      console.log('Location information is unavailable.');
      break;
    case error.TIMEOUT:
      console.log('The request to get user location timed out.');
      break;
    default:
      console.log('An unknown error occurred.');
      break;
  }
}