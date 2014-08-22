function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(27.340840, -82.549037),
    zoom: 16
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  setMarkers(map, locations);

  map.set('styles', [
    {
      "featureType": "road.highway",
      "stylers": [
        { "lightness": 1 },
        { "hue": "#00ffee" }
      ]
    },{
      "featureType": "water",
      "stylers": [
        { "hue": "#00ccff" },
        { "lightness": 9 }
      ]
    },{
      "featureType": "road.arterial",
      "stylers": [
        { "hue": "#f600ff" },
        { "lightness": 3 }
      ]
    },{
      "featureType": "road.local",
      "stylers": [
        { "hue": "#00ff19" },
        { "lightness": 4 }
      ]
    },{
      "featureType": "landscape.man_made",
      "stylers": [
        { "hue": "#ff00e6" },
        { "lightness": 35 }
      ]
    },{
      "featureType": "administrative.locality",
      "stylers": [
        { "hue": "#ff00f6" },
        { "lightness": 43 },
        { "saturation": 100 }
      ]
    }
  ]);
}

var locations = [
  ['Church', 27.337367 , -82.549982, 1, "images/beachflag.png"],
  ['Reception', 27.340840, -82.549037, 2, "images/beachflag.png"],
  ['Hotel', 27.340840, -82.549037, 3, "images/beachflag.png"]
];

function setMarkers(map, locations) {
  for (var i = 0; i < locations.length; i++) {
    var place = locations[i];
    var myLatLng = new google.maps.LatLng(place[1], place[2]);
    console.log(place[4]);
    var image = {
      url: place[4],
      // This marker is 20 pixels wide by 32 pixels tall.
      size: new google.maps.Size(20, 32),
      // The origin for this image is 0,0.
      origin: new google.maps.Point(0,0),
      // The anchor for this image is the base of the flagpole at 0,32.
      anchor: new google.maps.Point(0, 32)
    };
    var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18 , 1],
      type: 'poly'
    };
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image,
      shape: shape,
      title: place[0],
      zIndex: place[3]
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);