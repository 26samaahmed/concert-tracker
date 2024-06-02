//require('dotenv').config();

//const apikey = process.env.CONSUMER_KEY;

// Use Geolocation to estimate where the user is and find the events based on that
function getLocation() {
  if (navigator.geolocation) {
    // if successfull, call the showPosition function. Otherwise, call the showError function
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    var x = document.getElementById("location")
    x.innerHTML = "Unfortunately, we're unable to find your location since Geolocation is not supported by this browser";
  }
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for accessing their location.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Information for this location is not avaliable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to find the location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error has occurred.";
      break;
  }
}

function showPosition(position) {
  var x = document.getElementById("location");
  x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
  var latlon = position.coords.latitude + "," + position.coords.longitude;


  $.ajax ( {
    type:"GET",
    // Put API key here
    url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=key&latlong=" + latlon,
    async: true,
    dataType: "json",
    success: function (json) {
      console.log(json);
      var e = document.getElementById("events");
      e.innerHTML = json.page.totalElements + " events found.";
      showEvents(json);
      initMap(position, json);
    },
    error: function(xhr, status, err) {
      console.log(err)
    }
  });
}


function showEvents(json) {
  for (var i = 0; i < json.page.size; i++) {
    $("events").append("<p>"+json._embedded.events[i].name+"</p>");
  }
}

getLocation()
showEvents()