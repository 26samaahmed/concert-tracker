<svelte:head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
  <title> Concert Tracker </title>
</svelte:head>

<main>
  <form id="myForm">
    <input placeholder="Enter City" type="text" id="location"/><br>
    <input type="submit" value="submit" />
  </form>
  <div id="events"></div>
</main>