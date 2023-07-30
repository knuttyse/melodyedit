<script>
    import {onMount} from "svelte";
    import * as Tone from "tone";
    import NoteRow from "./NoteRow.svelte";
    import {playNotes} from "$lib/synth/play-notes.ts";

    let notes = [
        {name: "C#4", duration: "1/4", velocity: 80},
        {name: "D4", duration: "1/8", velocity: 60},
        {name: "E4", duration: "1/2", velocity: 70}
        // Add more notes as needed
    ];

    let synth = null;

    onMount(() => {
        synth = new Tone.Synth().toDestination();
    });

    function onClick() {
        playNotes(synth, notes)
    }


</script>

<NoteRow {notes}/>
<button on:click={onClick}>Play</button>
