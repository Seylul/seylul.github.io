  var directionDisplay;
  var rulerpoly;
  var resetControl = false;
  var i = 0;
  var index = 0;
  var response;
  var directionsService = new google.maps.DirectionsService();
  var map;
  var way = [];
  var origin = null;
  var destination = null;
  var waypoints = [];
  var markers = [];
  var directionsVisible = false;
  var circle;
  var trafficLayer;
  
  function initialize() {

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
		    origin = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	
		    var options = {
		        zoom: 15,
		        center: window.origin,
		        mapTypeControl: false,
		        navigationControlOptions: {
		            style: google.maps.NavigationControlStyle.SMALL
		        },
		        mapTypeId: google.maps.MapTypeId.ROADMAP
		    };
		    map = new google.maps.Map(document.getElementById("map_canvas"), options);
			var trafficLayer = new google.maps.TrafficLayer();
			trafficLayer.setMap(map);
		    addMarker(window.origin);
			addCircle(window.origin);
		    
		    directionsDisplay = new google.maps.DirectionsRenderer({
          		map: map,
          		preserveViewport: true,
          		draggable: true
       		});

			google.maps.event.addListener(window.map, 'click', function(event) {
				if (window.destination == null) {
					destination = event.latLng;
					addMarker(window.destination);
					resetControl = false;
				}
				calcRoute();
			});// google map listener
		});
	}// navigator if statement
	else {
  		alert('Geo Location is not supported');
	}
  }

  function addCircle(latlng){
	var circleOptions = {
	  center: latlng,
	  radius: 250,
	  map: map,
	  editable: false,
	};
	circle = new google.maps.Circle(circleOptions);
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

  function calcRoute() {
    if (origin == null) {
      alert("Click on the map to add a start point");
      return;
    }
    
    if (destination == null) {
      alert("Click on the map to add an end point");
      return;
    }
    
    var mode = google.maps.DirectionsTravelMode.DRIVING;
    
    var request = {
        origin: window.origin,
        destination: window.destination,
        waypoints: waypoints,
        travelMode: mode,
		provideRouteAlternatives: true,
        optimizeWaypoints: true,
        avoidHighways: true,
        avoidTolls: true
    };
    
    directionsService.route(request, function(response, status) {
	  window.response = response;

      if (status == google.maps.DirectionsStatus.OK) {
		circle.setMap(null);
		$("#page1 ul").append("<li class=\"ui-li ui-li-divider ui-bar-c ui-corner-top ui-corner-bottom ui-li-last\" role=\"heading\" data-role=\"list-divider\"> Suggestion Route </li>");
		for( var r in response.routes)
		{
			$("#page1 ul").append("<li class=\"ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-corner-bottom ui-li-last ui-btn-up-c\" data-theme=\"c\" data-corners=\"false\" data-shadow=\"true\" data-iconshadow=\"true\" data-wrapperels=\"div\" data-icon=\"arrow-r\" data-iconpos=\"right\"><div class=\"ui-btn-inner ui-li\"><div class=\"ui-btn-text\"><a class=\"ui-link-inherit\" data-transition=\"pop\" href=\"#\"> <div id=" + r + " onClick=\"reply_click(this.id)\"><strong>" + response.routes[r].summary + "</strong>" + "  " + response.routes[r].legs[0].distance.text + " - " + "about " + response.routes[r].legs[0].duration.text + "<img src=\"icons/arrow.png\"></div></a></div><span class=\"ui-icon ui-icon-arrow-r ui-icon-shadow\">&nbsp;</span></div></li>");
		}
		draw(window.response.routes[index].overview_path);
      }
	  else{
	  	alert("This travel mode does note exist for that way!");
		return;
	  }
    });
	directionsVisible = true;
  }
  function addway(){
	if( resetControl ){
		alert("Please select destination address");
	}
	else{
		way.push("<img src=\"icons/way.png\">  " + response.routes[index].legs[0].steps[i].instructions);
		i = i + 1;
		$("#page1 ul li").remove();
		$("#page1 ul").append("<li class=\"ui-li ui-li-divider ui-bar-c ui-corner-top ui-corner-bottom ui-li-last\" role=\"heading\" data-role=\"list-divider\"> Adress Directions </li>");
		for( var t in way){
			$("#page1 ul").append("<li class=\"ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-corner-bottom ui-li-last ui-btn-up-c\" data-theme=\"c\" data-corners=\"false\" data-shadow=\"true\" data-iconshadow=\"true\" data-wrapperels=\"div\" data-icon=\"arrow-r\" data-iconpos=\"right\"><div class=\"ui-btn-inner ui-li\"><div class=\"ui-btn-text\"><a class=\"ui-link-inherit\" data-transition=\"pop\" href=\"#\">"+ way[t] +"</a></div><span class=\"ui-icon ui-icon-arrow-r ui-icon-shadow\">&nbsp;</span></div></li>");
		}
	}
  }
  function routes(){
	if( resetControl ){
		alert("Please select destination address");
	}
	else{
		window.rulerpoly.setMap(null);
		$("#page1 ul li").remove();
		$("#page1 ul").append("<li class=\"ui-li ui-li-divider ui-bar-c ui-corner-top ui-corner-bottom ui-li-last\" role=\"heading\" data-role=\"list-divider\"> Suggestion Route </li>");
		for( var r in response.routes)
		{
			$("#page1 ul").append("<li class=\"ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-corner-bottom ui-li-last ui-btn-up-c\" data-theme=\"c\" data-corners=\"false\" data-shadow=\"true\" data-iconshadow=\"true\" data-wrapperels=\"div\" data-icon=\"arrow-r\" data-iconpos=\"right\"><div class=\"ui-btn-inner ui-li\"><div class=\"ui-btn-text\"><a class=\"ui-link-inherit\" data-transition=\"pop\" href=\"#\"> <div id=" + r + " onClick=\"reply_click(this.id)\"><strong>" + response.routes[r].summary + "</strong>" + "  " + response.routes[r].legs[0].distance.text + " - " + "about " + response.routes[r].legs[0].duration.text + "<img src=\"icons/arrow.png\"></div></a></div><span class=\"ui-icon ui-icon-arrow-r ui-icon-shadow\">&nbsp;</span></div></li>");
		}
		draw(window.response.routes[index].overview_path);
	}
  }
  function draw(path){
	  
	var mode = google.maps.DirectionsTravelMode.DRIVING;

	allpath = [];
	for( var p in path)
	{
		allpath.push(new google.maps.LatLng(path[p].Ya, path[p].Za));
	}

	rulerpoly = new google.maps.Polyline({
		path: allpath ,
		strokeColor: "#d00b35",
		strokeOpacity: .8,
		strokeWeight: 7
	});
	
	rulerpoly.setMap(map);  
  }
  function reply_click(clicked_id)
  {
	way = [];
	i = 0;
	index = clicked_id;
	$("#page1 ul li").remove();
	addway();
	window.rulerpoly.setMap(null);
	draw(window.response.routes[clicked_id].overview_path);
  }
  function updateMode() {
    if (directionsVisible) {
      calcRoute();
    }
  }
  
  function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
  }
  
  function clearWaypoints() {
    markers = [];
    origin = null;
    destination = null;
    waypoints = [];
    directionsVisible = false;
  }
  
  function reset() {
    destination = null;
    for (var i = 1; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    rulerpoly.setMap(null);
    resetControl = true;
    $("#page1 ul li").remove();
  }
