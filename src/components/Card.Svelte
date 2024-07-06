<!--The design of each card from the events with the details of the concert-->
<div class="card">
  <slot></slot>
</div>

<style>
  .card {
		max-width: 280px;
		background-color: rgba(255, 255, 255, 0.46);
		padding: 2rem;
		border-radius: 20px;
    margin: 10px;
  }
  
  .card:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
</style>