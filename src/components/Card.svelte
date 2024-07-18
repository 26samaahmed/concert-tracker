<!--The design of each card from the events with the details of the concert-->
<div class="card">
  <slot></slot>
</div>

<style>
  .card {
    max-width: 280px;
    background-color: rgb(255, 255, 255, 0.5);
    padding: 2rem;
    margin: 10px;
    color: white;
    border-radius: 7px;
    border:2px solid rgb(247, 223, 252);
  }

  .card:hover {
    border: 2px solid rgb(0, 0, 0);
  }
</style>