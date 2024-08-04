<!--Used to create a new row for every 3 events-->
<div class="row">
  <slot></slot>
</div>

<style>
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    .row {
      grid-template-columns: 1fr;

    }
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    .row {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>