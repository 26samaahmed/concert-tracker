<script>
  export let location = "";

  import Card from "./Card.svelte";
  import { fetchData, convertDate, convertTime } from "../api/fetchData.js";
  import { onMount } from "svelte";

  let events = [];

  // Call the fetchData function to get the events
  onMount(async () => { // onMount is a lifecycle function that runs when the component is mounted
    try {
      events = await fetchData(location);
    } catch (error) {
      console.error(error);
    }
  });

</script>

{#each events as event}
  <Card>
    <h2>{event.name}</h2>
    <p>Artist: {event.artist}</p>
    <p>Date: {convertDate(event.date)} at {convertTime(event.time)}</p>
    <p>Genre: {event.genre}</p>
    <p>Venue: {event.venue}</p>
    <a href={event.url} target="_blank">View Seatings</a>
  </Card>
{/each}