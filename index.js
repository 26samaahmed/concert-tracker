const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  const location = form[0].value;

  // Make an asyncronous GET request to the Ticketmaster API
  $.ajax({
    type: "GET",
    url:
    // Filter by music events in the US (make sure to properly add the api key to the URL).
    // Regenerate API KEY from Ticketmaster Developer Portal
      "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&classificationName=music&city=" +
      location +
      "&apikey=" + API_KEY,
    async: true,
    dataType: "json",
    success: function (json) {
      console.log(json); // for debugging purposes
      var e = document.getElementById("events");
      if (e) {
        e.innerHTML = json.page.totalElements + " events found.";
        for (var i = 0; i < json.page.size; i++) {
          $("#events").append(
            "<div class='event'>" +
              "<h2>" + json._embedded.events[i].name + "</h2>" +
              "<p>Timezone: " + json._embedded.events[i].dates.timezone + "</p>" +
              "<p>Date: " + json._embedded.events[i].dates.start.localDate + "</p>" +
              "<p>Time: " + json._embedded.events[i].dates.start.localTime + "</p>" +
              "<p>Genre: " + json._embedded.events[i].classifications[0].genre.name + "</p>" + // Genre is for filtering events later on
              "<p>Price Range: $" + json._embedded.events[i].priceRanges[0].min + " - $" + json._embedded.events[i].priceRanges[0].max + "</p>" +
              "<p>Venue: " + json._embedded.events[i]._embedded.venues[0].name + "</p>" +
              "<p><a href='" + json._embedded.events[i].url + "' target='_blank'>View Seating</a></p>" +
            "</div>"
          );
          
        }
      } else {
        console.error("No element with id 'events' found.");
      }
    },
    error: function (xhr, status, err) {
      console.log(err);
      console.error("Failed to fetch data from Ticketmaster API.");
    },
  });
  event.preventDefault();
});