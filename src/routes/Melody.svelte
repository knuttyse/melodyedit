<script>
    import {onMount} from "svelte";
    import * as Tone from "tone";
    import NoteRow from "./NoteRow.svelte";
    import {playNotes} from "$lib/synth/play-notes.ts";
    import {generateNotes} from "$lib/notegenerator/generate.ts";

    let notes = generateNotes(8);

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
