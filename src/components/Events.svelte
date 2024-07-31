<script>
  export let location = "";
  export let month = 0;

  import Card from "./Card.svelte";
  import Row from "./Row.svelte";
  import { fetchData, convertDate, convertTime } from "../api/fetchData.js";
  import { onMount } from "svelte";

  let events = [];
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Call the fetchData function to get the events
  onMount(async () => { // onMount is a lifecycle function that runs when the component is mounted
    try {
      events = await fetchData(location, month);
    } catch (error) {
      console.error(error);
    }
  });

</script>

<!-- Show loading message until the events are fetched -->
{#if events == 0}
  <p style="color: white; font-size: 1.5rem">Loading...</p>

<!-- If there are no events in the location, show a message -->
{:else if events.length != 0}
  <p style="color: white; font-size: 1.5rem">Concerts in {location} in {months[month - 1]}</p>
  {#each events as event, i}
    <!-- Create new Row if i % 3 == 0 -->
    {#if i % 3 == 0}
      <Row>
        <!-- First Event in the Row -->
        <Card>
          <img src={event.image} alt={event.name} />
          <h4>{event.name}</h4>
          <p><b>Artist: </b>{event.artist}</p>
          <p><b>Date: </b>{convertDate(event.date, event.timeZone)} at {convertTime(event.time)}</p>
          <p><b>Venue: </b>{event.venue}</p>
          <a href={event.url} target="_blank">View Seatings</a>
          <!--Add a checkbox for a concert on the list to attend in the future so it can be saved on a dashboard-->
          <input type="checkbox" class="attend" name="attend" value="attend">
          <label for="attend">Add to Dashboard</label>
        </Card>

        <!-- Second Event in the Row -->
        {#if events[i + 1]}
          <Card>
            <img src={events[i + 1].image} alt={events[i + 1].name} />
            <h4>{events[i + 1].name}</h4>
            <p><b>Artist: </b>{events[i + 1].artist}</p>
            <p><b>Date: </b>{convertDate(events[i + 1].date, events[i + 1].timeZone)} at {convertTime(events[i + 1].time)}</p>
            <p><b>Venue: </b>{events[i + 1].venue}</p>
            <a href={events[i + 1].url} target="_blank">View Seatings</a>
            <input type="checkbox" class="attend" name="attend" value="attend">
            <label for="attend">Add to Dashboard</label>
          </Card>
        {/if}

        <!-- Third Event in the Row -->
        {#if events[i + 2]}
          <Card>
            <img src={events[i + 2].image} alt={events[i + 2].name} />
            <h4>{events[i + 2].name}</h4>
            <p><b>Artist: </b>{events[i + 2].artist}</p>
            <p><b>Date: </b>{convertDate(events[i + 2].date, events[i + 1].timeZone)} at {convertTime(events[i + 2].time)}</p>
            <p><b>Venue: </b>{events[i + 2].venue}</p>
            <a href={events[i + 2].url} target="_blank">View Seatings</a>
            <input type="checkbox" class="attend" name="attend" value="attend">
            <label for="attend">Add to Dashboard</label>
          </Card>
        {/if}
        
      </Row>

    {/if}
  {/each}
{:else}
  <p style="color: white; font-size: 1.5rem">No concerts found in {location}</p>
{/if}

<style>
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 3px;
  }

  h4, p {
    text-align: left;
  }

  a {
    color: white;
    text-decoration: none;
    background-color: rgb(0, 10, 25);
    padding: 0.9rem;
    border-radius: 5px;
    margin-top: 1rem;
    display: inline-block;
    text-align: center;
  }

  a:hover {
    background-color: rgb(255, 255, 255);
    color: black;
    transition-duration: 0.25s;
  }

  input[type="checkbox"] {
    margin-top: 1rem;
  }

  label {
    color: white;
    margin-left: 0.5rem;
  }
</style>
