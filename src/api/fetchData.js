export async function fetchData(location) {
    let eventsArray = [];
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
          for (var i = 0; i < 5; i++) {
            eventsArray.push({
              image: json._embedded.events[i].images[0].url,
              name: json._embedded.events[i].name,
              artist: json._embedded.events[i]._embedded.attractions[0].name,
              date: json._embedded.events[i].dates.start.localDate,
              time: json._embedded.events[i].dates.start.localTime,
              genre: json._embedded.events[i].classifications[0].genre.name,
              venue: json._embedded.events[i]._embedded.venues[0].name,
              url: json._embedded.events[i].url,
              id: i
            });
            // for debugging purposes
            console.log("Event " + i + ": " + eventsArray[i].name);
          }
      },
      error: function (xhr, status, err) {
        console.log(err);
        console.error("Failed to fetch data from Ticketmaster API.");
      },
    });
  
  // return the event data so that i can use in the svelte component
  return eventsArray;
}