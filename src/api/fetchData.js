export async function fetchData(location) {

  let eventsArray = [];
  try {
    // fetch data from Ticketmaster API using the location provided by the user
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&classificationName=music&city=${location}&apikey=${CONSUMER_KEY}`);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    //console.log(json);
    //console.log(json.pages.size)
    // Parse the JSON data and store it in an array of objects with each event's details
    for (var i = 0; i < 100; i++) {
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

// Converts a date from 'YYYY-MM-DD' to for this format 'Sat Sep 14 2024'
export function convertDate(stringDate) {
  let newDate = new Date(stringDate);
  return newDate.toDateString();
}

// Converts time from '18:30:00' to this format '7:30 PM'
export function convertTime(time) {
  // Split the string to access hour and minutes individually
  time = time.split(':');
  let hour = Number(time[0]);
  let minute = Number(time[1]);

  let newHour;
  let am_or_pm = "AM"

  // if hours are abover 12, subtract from 12
  if (hour > 0 && hour < 12) {
    newHour = "" + hour;
  } else if (hour > 12) {
    newHour = "" + (hour - 12);
    am_or_pm = "PM"
  } else {
    newHour = "12";
  }

  // if minutes are below 10, concatenate a 0 before the one digit
  if (minute < 10) {
    minute = "0" + minute;
  }

  newHour += ":" + minute + " " + am_or_pm;
  return newHour;
}