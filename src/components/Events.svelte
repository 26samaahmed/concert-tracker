<script>
  export let location = "";

  import Card from "./Card.svelte";
  import Row from "./Row.svelte";
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

{#if events.length == 0}
  <p style="color:white; font-size: 1.5rem">No events found in {location}</p>
{:else}
  <p style="color: white; font-size: 1.5rem">Concerts in {location}</p>
  {#each events as event, i}
    <!-- Create new Row if i % 3 == 0 -->
    {#if i % 3 == 0}
      <Row>
        <!-- First Event in the Row -->
        <Card>
          <h2>{event.name}</h2>
          <p>Artist: {event.artist}</p>
          <p>Date: {convertDate(event.date)} at {convertTime(event.time)}</p>
          <p>Genre: {event.genre}</p>
          <p>Venue: {event.venue}</p>
          <a href={event.url} target="_blank">View Seatings</a>
        </Card>

        <!-- Second Event in the Row -->
        {#if events[i + 1]}
          <Card>
            <h2>{events[i + 1].name}</h2>
            <p>Artist: {events[i + 1].artist}</p>
            <p>Date: {convertDate(events[i + 1].date)} at {convertTime(events[i + 1].time)}</p>
            <p>Genre: {events[i + 1].genre}</p>
            <p>Venue: {events[i + 1].venue}</p>
            <a href={events[i + 1].url} target="_blank">View Seatings</a>
          </Card>
        {/if}

        <!-- Third Event in the Row -->
        {#if events[i + 2]}
          <Card>
            <h2>{events[i + 2].name}</h2>
            <p>Artist: {events[i + 2].artist}</p>
            <p>Date: {convertDate(events[i + 2].date)} at {convertTime(events[i + 2].time)}</p>
            <p>Genre: {events[i + 2].genre}</p>
            <p>Venue: {events[i + 2].venue}</p>
            <a href={events[i + 2].url} target="_blank">View Seatings</a>
          </Card>
        {/if}
        
      </Row>

    {/if}
  {/each}
{/if}