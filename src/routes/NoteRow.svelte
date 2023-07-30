<script>
    import Note from "./Note.svelte";
    export let notes = [];
  </script>
  
  <style>
    .note-row {
      display: flex;
    }
  </style>
  
  <div class="note-row">
    {#each notes as note}
      <Note {note} />
    {/each}
  </div>
  