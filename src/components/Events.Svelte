<script>
  export let location = "";
  
  import Card from "./Card.svelte";
  import fetchData from "../api/fetchData.js";
  import { onMount } from "svelte";

  let events = [];
  onMount(async () => {
    events = await fetchData(location);
  });
</script>

<div>
  {#each events as event}
    <Card>
      <h2>{event.name}</h2>
      <h2>{event.artist}</h2>
      <h2>{event.date}</h2>
      <h2>{event.time}</h2>
      <h2>{event.genre}</h2>
      <h2>{event.venue}</h2>
      <a href={event.url}>View Seatings</a>
    </Card>
  {/each}
</div>