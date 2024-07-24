<script>
  import Events from "../components/Events.svelte";
  let showEvents = false;
  let location = ""; // This location will be passed to the Events component
  let artist = "";
  let genre = "";

  function getEvents(event) {
    event.preventDefault(); // Prevent the form from submitting by default
    showEvents = true;
  }
</script>

<svelte:head>
  <title> Concert Tracker </title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&display=swap" rel="stylesheet">
</svelte:head>

<main>
  <p id="header">Welcome, search for concerts happening anywhere here</p>
  <form on:submit={getEvents}>
    <div style="display: inline-block;">
      <input placeholder="Enter City" type="text" bind:value={location} required/>
      <!-- Filer by month using a drop down, starting from the current month till the end of the year-->
      <!--<label for="month">Choose a month</label>-->
      <select id="month">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
    </div>
    <input type="submit" value="Submit"/>

    <!-- Slider for budget
    <input type="range" min="0" max="10000" step="50" value="500" list="tickmarks" />
    <datalist id="tickmarks">
      <option value="0" label="$0" />
      <option value="1000" label="$10000" />
    </datalist>
    -->
  </form>
  <!--If the user hits enter then show the events-->
  {#if showEvents}
    <Events {location}/>
  {/if}
</main>

<style>
  :global(body) {
    background-color:rgb(0, 10, 25);
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: "Oxanium", sans-serif;
  }

  #header {
    margin-top: 90px;
    color: rgb(255, 255, 255);
    font-size: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  input[type="text"] {
    padding: 0.7rem;
    border-radius: 5px;
    font-size: 1.5rem;
    border: none;
		background-color: rgb(255, 255, 255, 0.5);
    color: rgb(255, 255, 255);
    margin-bottom: 16px;
  }

  ::placeholder {
    color: rgb(255, 255, 255);
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

  input[type="submit"]:hover {
    background-color: rgb(0, 0, 0);
    transition-duration: 0.5s;
    color: white;
  }

  #month {
    padding: 0.7rem;
    border-radius: 5px;
    font-size: 1.5rem;
    border: none;
    background-color: rgb(255, 255, 255, 0.5);
    color: rgb(255, 255, 255);
    margin-left: 16px;
  }
</style>

<!--TODO: Sort the events by closest day.
    TODO: Sort by year because for a city like LA, there's 1000+ concerts
    TODO: Adjust how many events show per page-->