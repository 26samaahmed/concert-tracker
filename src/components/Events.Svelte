<!--Implement the logic of fetching the events from the api-->
<script>
  import Card from "./Card.svelte";
  import {fetchData} from "../api/fetchData.js";
  let events = new fetchData();
  // Use reactive statements ($: ...) to update the events array or state when data is fetched successfully.
  $: fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=APIKEYI&city=${location}') 
  .then(response => response.json())
  .then(data => {
    events = data;
  })
  .catch(error => {
    console.error('Error:', error);
  });
</script>

<!--The design of each card from the events with the details of the concert-->
{#each events as event}
  <Card>
   <img src={event.image} alt="Concert Image" />
   <h2>{event.name}</h2>
   <h2>{event.artist}</h2>
   <h2>{event.date}</h2>
   <h2>{event.time}</h2>
   <h2>{event.genre}</h2>
   <h2>{event.venue}</h2>
   <a href={event.url}>View Seatings</a>
  </Card>
{/each}


