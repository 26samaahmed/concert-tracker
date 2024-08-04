<script>
  import Events from "../components/Events.svelte";
  let showEvents = false;
  let location = ""; // This location will be passed to the Events component
  // The default value should be the current month if the user doens't select a month
  let month = 0;

  
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
      <select name="month" id="month" bind:value={month}>
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
      </select>
    </div>
    <input type="submit" value="Submit"/>
  </form>

  <!--If the user hits enter then show the events-->
  {#if showEvents}
    <!-- Have a reset button if the user wants to enter a new value for city and a different month-->
    <button id="reset-btn" on:click={() => showEvents = false}>Reset</button>
    <Events {location} {month}/>
  {/if}
</main>

<style>
  :global(body) {
    background: rgb(181,118,203);
    background: radial-gradient(circle, rgba(181,118,203,1) 14%, rgba(70,85,252,1) 73%);
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
    color: rgb(0, 0, 0);
    margin-bottom: 16px;
    width: 500px;
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
    color: rgb(0, 0, 0);
    margin-left: 16px;
  }

  #reset-btn {
    background-color: white;
    color: black;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid rgb(240, 244, 239);
    cursor: pointer;
    margin-top: 1rem;
  }

  #reset-btn:hover {
    background-color: rgb(0, 0, 0);
    transition-duration: 0.5s;
    color: white;
  }

  @media (max-width: 768px) {
    input[type="text"] {
      width: 150px;
    }

    input[type="submit"] {
      margin-top: 1rem;
    }
  }

</style>