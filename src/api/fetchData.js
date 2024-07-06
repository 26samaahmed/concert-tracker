export function fetchData() {
  const form = document.getElementById("myForm");
  form.addEventListener("submit", function (event) {
    const location = form[0].value;
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
        var e = document.getElementById("events");
        if (e) {
          e.innerHTML = json.page.totalElements + " events found.";
          console.log("Page size: " + json.page.size);
          for (var i = 0; i < 5; i++) {
          // Instead of appending the data to a div, i want to append it to an array that can returned so that i'm able to use it in the svelte component
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
  
  // return the event data so that i can use in the svelte component
  return eventsArray;
}

console.log(fetchData());

// since the function above is async, it's returing a promise which means i would have to use .then() to get the data
// maybe i should also add a loading spinner to the svelte component while the data is being fetched