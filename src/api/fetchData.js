// This file contains functions that fetch data from the Ticketmaster API and convert the date and time to a more readable format.
import moment from 'moment-timezone';
export let pages = 0;
export let eventsCount = 0;

export async function fetchData(location, month) {

  const consumerKey = import.meta.env.VITE_CONSUMER_KEY;
  const order = 'date,asc';
  const eventType = 'music';
  const country = 'US';

  // Pass in the month as a parameter to get events for that month
  const startDate = `2024-${month}-02T00:00:00Z`;
  const endDate = `2024-${month}-31T23:59:59Z`;

  let eventsArray = [];
  try {
    // fetch data from Ticketmaster API using the location provided by the user
    // sort the events by date in ascending order
    // I want the size of the page to be however many events there are in that location in that month
    // Each page can only show 24 events, so I need to split them into multiple pages
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&countryCode=${country}&classificationName=${eventType}&city=${location}&apikey=${consumerKey}&startDateTime=${startDate}&endDateTime=${endDate}&sort=${order}&size=24`);
  

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    //console.log(json);
    //console.log(json.pages.size)
    // Parse the JSON data and store it in an array of objects with each event's details
    eventsCount = json.page.totalElements;
    pages = eventsCount / 24;
    console.log("Number of events: " + eventsCount);
    for (var i = 0; i <= eventsCount; i++) {
      eventsArray.push({
        image: json._embedded.events[i].images[4].url,
        name: json._embedded.events[i].name,
        artist: json._embedded.events[i]._embedded.attractions[0].name,
        date: json._embedded.events[i].dates.start.localDate,
        time: json._embedded.events[i].dates.start.localTime,
        genre: json._embedded.events[i].classifications[0].genre.name,
        venue: json._embedded.events[i]._embedded.venues[0].name,
        timeZone: json._embedded.events[i].dates.timezone,
        url: json._embedded.events[i].url,
        id: i
      });
      // for debugging purposes
      //console.log("Event " + i + ": " + eventsArray[i].name);
    }
    console.log("Events Array is: ", eventsArray.length)
    return eventsArray;

  } catch (error) {
    console.error(error.message);
    return eventsArray; // return empty array if error
  }
}

// Converts a date from 'YYYY-MM-DD' to for this format 'Sat Sep 14 2024'
export function convertDate(stringDate, timeZone) {
  // Create a new moment object with the date and timezone
  let newDate = moment.tz(stringDate, timeZone);

  // Format the date to the desired format
  return newDate.format('ddd MMM DD YYYY');
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