<script>
  import Events from "../components/Events.svelte";
  let showEvents = false;
  let location = ""; // This location will be passed to the Events component

  function getEvents(event) {
    event.preventDefault(); // Prevent the form from submitting by default
    showEvents = true;
  }
</script>

<svelte:head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
  <title> Concert Tracker </title>
</svelte:head>

<main>
  <form id="myForm" on:submit={getEvents}>
    <input placeholder="Enter City" type="text" bind:value={location} required/><br>
    <input type="submit" value="submit"/>
  </form>

  <!--If the user hits enter then show the events-->
  {#if showEvents}
    <Events {location}/>
  {/if}
</main>

<!--TODO: Figure out how to trigger the events component whenever the user clicks submit-->