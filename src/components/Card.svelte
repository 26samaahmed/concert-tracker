<!--The design of each card from the events with the details of the concert-->
<div class="card">
	<slot></slot>
</div>

<style>
	.card {
		max-width: 300px;
		background-color: rgba(151, 174, 255, 0.7);
		padding: 2rem;
		margin: 20px;
		color: rgb(0, 0, 0);
		border-radius: 7px;
		border: 2px solid rgb(255, 255, 255);
	}

	.card:hover {
		border: 2px solid black;
		transition-duration: 0.25s;
	}
</style>
