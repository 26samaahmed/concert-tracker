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
  <title> Concert Tracker </title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
</svelte:head>

<main>
  <h1>Welcome to Concert Tracker! <br> Search for concerts happening anywhere here</h1>
  <form on:submit={getEvents}>
    <input placeholder="Enter City" type="text" bind:value={location} required/><br>
    <input type="submit" value="Submit"/>
  </form>

  <!--If the user hits enter then show the events-->
  {#if showEvents}
    <Events {location}/>
  {/if}
</main>

<style>
  :global(body) {
    background-color:rgb(13, 24, 33);
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    text-align: center;
    font-family: "Ubuntu", sans-serif;
  }

  h1 {
    color: rgb(240, 244, 239);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  input {
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 10px;
    font-size: 2rem;
    border: none;
    background-color: rgb(255, 255, 255, 0.5);
    color:white;
  }

  input[type="submit"] {
    background-color: white;
    color: black;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid rgb(240, 244, 239);
    cursor: pointer;
  }
</style>