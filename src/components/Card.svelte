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
		border: 3px solid rgba(70,85,252,1);
	}

	.card:hover {
		border: 3px solid rgb(0, 15, 180);
		transition-duration: 0.25s;
	}
</style>
