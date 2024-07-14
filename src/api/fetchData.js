export async function fetchData(location) {
  let eventsArray = [];
  try {
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&classificationName=music&city=${location}&apikey=${apiKey}`);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    //console.log(json);

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
    return eventsArray;

  } catch (error) {
    console.error(error.message);
    return eventsArray; // return empty array if error
  }
}
