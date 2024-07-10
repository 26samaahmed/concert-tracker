<!-- Implement the logic of fetching the events from the api-->
<script>
  import Card from "./Card.svelte";
  import fetchData from "../api/fetchData.js";
  let events = new fetchData();
</script>

<!--The design of each card from the events with the details of the concert-->
{#await fetchData()}
  <p>Loading ...</p>
{:then events}
  {#each events as event}
    <Card>
      <!--<img src={event.image} alt="Concert Image" />-->
      <h2>{event.name}</h2>
      <h2>{event.artist}</h2>
      <h2>{event.date}</h2>
      <h2>{event.time}</h2>
      <h2>{event.genre}</h2>
      <h2>{event.venue}</h2>
      <a href={event.url}>View Seatings</a>
    </Card>
  {/each}
{:catch error}
	<p style="color: red">A problem occured while fetching the events. Please try again in a few minutes!</p>
{/await}