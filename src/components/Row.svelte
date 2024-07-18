<!--Used to create a new row for every 3 events-->
<div class="row">
  <slot></slot>
  <slot></slot>
  <slot></slot>
</div>

<style>
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>