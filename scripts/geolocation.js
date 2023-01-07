function getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
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
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }