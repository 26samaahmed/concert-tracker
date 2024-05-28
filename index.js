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

function showError(err) {
 
}