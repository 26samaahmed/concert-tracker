<script>
  import Events from "../components/Events.svelte";
  let showEvents = false;
  let location = ""; // This location will be passed to the Events component

  function getEvents(event) {
    event.preventDefault(); // Prevent the form from submitting by default
    showEvents = true;
    var hide = document.getElementById("instructions");
    hide.style.display = "none";
  }
</script>

<svelte:head>
  <title> Concert Tracker </title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
</svelte:head>

<main>
  <p id="header">Welcome to Concert Tracker! <br> Search for concerts happening anywhere here</p>
  <form on:submit={getEvents}>
    <input placeholder="Enter City" type="text" bind:value={location} required/><br>
    <input type="submit" value="Submit"/>
      <!--
      <input type="range" min="0" max="1000" step="50" value="500" list="tickmarks" />
      <datalist id="tickmarks">
        <option value="0" label="$0" />
        <option value="1000" label="$1000" />
      </datalist>
      -->
    <div id="instructions">
      <p>Instructions:<br>
        1. Start by picking any city in the United States<br>
        2. You can go ahead and click submit after.<br>
        3. You can filter concerts by a specific artist or genre.<br>
        4. If you have a certain budget, you can drag the slide up and down based on your preference.<br>
        5. Now that you can view all the concerts around this city, you can view the seatings by clicking the link at the bottom of each tile.<br>
        6. And..... That’s it! There you go, now you can easily go ahead and check out all the concerts quickly.
      </p>
    </div>
  </form>

  <!--If the user hits enter then show the events-->
  {#if showEvents}
    <Events {location}/>
  {/if}
</main>

<style>
  :global(body) {
    background-color:rgb(0, 0, 0);
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: "Playfair Display", serif;
  }

  #header {
    color: rgb(240, 244, 239);
    font-size: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  input[type="text"] {
    padding: 0.5rem;
    border-radius: 5px;
    font-size: 1.5rem;
    border: none;
    background-color: rgba(255, 255, 255, 0.918);
    color: black;
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
    background-color: salmon;
    transition-duration: 0.5s;
    color: white;
  }

  #instructions {
    font-size: 1.5rem;
    margin-top: 2rem;
    width: 50%;
    background-color: rgba(247, 251, 247, 0.862);
    border: 2px solid rgb(240, 244, 239);
    border-radius: 5px;
    text-align: left;
    padding: 1.5rem;
  }
</style>