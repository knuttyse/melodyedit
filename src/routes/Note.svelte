<script>
    export let name = "C#4"; // Note name, e.g., C#4
    export let duration = "1/4"; // Note duration, e.g., 1/4
    export let velocity = 80; // Note velocity or strength, e.g., 80
  </script>
  
  <style>
    .note {
      border: 1px solid black;
      padding: 10px;
      margin: 5px;
      display: inline-block;
    }
    .name {
      font-weight: bold;
    }
    .duration, .velocity {
      font-style: italic;
    }
  </style>
  
  <div class="note">
    <div class="name">Note: {name}</div>
    <div class="duration">Duration: {duration}</div>
    <div class="velocity">Velocity: {velocity}</div>
  </div>
  