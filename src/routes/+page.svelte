<script>
  import { fetchData } from "../api/fetchData";
</script>
<svelte:head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
  <title> Concert Tracker </title>
</svelte:head>


<main>
  <form id="myForm" method="POST">
    <input placeholder="Enter City" type="text" id="location"/><br>
    <input on:click={fetchData} type="submit" value="submit"/>
    <div id="events"></div>
  </form>
</main>

<!--TODO: Figure out how to trigger the events component whenever the user clicks submit-->