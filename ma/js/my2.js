var map;
var origin;
var markers = [];
var service;
var infowindow;

function initialize() {

if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
		    origin = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	
		    updateMode();
	});
  }
}
function updateMode(){
	var mapTypeId;
    switch (document.getElementById("mapid").value) {
      case "Roadmap":
        mapTypeId = google.maps.MapTypeId.ROADMAP;
        break;
      case "Satellite":
        mapTypeId = google.maps.MapTypeId.SATELLITE;
        break;
      case "Hybrid":
        mapTypeId = google.maps.MapTypeId.HYBRID;
        break;
      case "Terrain":
        mapTypeId = google.maps.MapTypeId.TERRAIN;
        break;
    }
	var options = {
		        zoom: 10,
		        center: window.origin,
		        mapTypeControl: false,
		        navigationControlOptions: {
		            style: google.maps.NavigationControlStyle.SMALL
		        },
		        mapTypeId: mapTypeId
		    };
	map = new google.maps.Map(document.getElementById("map_canvas"), options);
	
	addMarker(origin);
	
	var request = {
				location: origin,
				radius: document.getElementById("radius").value,
				types: [document.getElementById("types").value]
			};

			infowindow = new google.maps.InfoWindow();
			service = new google.maps.places.PlacesService(map);
			service.nearbySearch(request, callback);
}
function addMarker(latlng) {
    markers.push(new google.maps.Marker({
      position: latlng, 
      map: map,
	  draggable:false,
      animation: google.maps.Animation.BOUNCE,
      icon: "icons/pink.png"
    }));
  }
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}
function createMarker(place) {
	var placeLoc = place.geometry.location;
	if (!place.photos) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          icon: "icons/pink.png"
        });
	}
	else {
		var pinIcon = new google.maps.MarkerImage(
			place.photos[0].raw_reference.fife_url,
			null, /* size is determined at runtime */
			null, /* origin is 0,0 */
			null, /* anchor is bottom center of the scaled image */
			new google.maps.Size(50, 50)
		);
		var marker = new google.maps.Marker({
			map: map,
			position: place.geometry.location,
			title: place.name,
			icon: pinIcon
	});
	}
        google.maps.event.addListener(marker, 'click', function() {
			if (place.photos){
				infowindow.setContent(place.name + "<br>" + "<img src=" + place.photos[0].raw_reference.fife_url +" width=200 height=200>");
			}
			else{
				infowindow.setContent(place.name);
			}
			infowindow.open(map, this);
        });
      }
