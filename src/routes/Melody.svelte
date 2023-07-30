<script>
    import {onMount} from "svelte";
    import * as Tone from "tone";
    import NoteRow from "./NoteRow.svelte";

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

    function playNote(name, duration) {
        synth?.triggerAttackRelease(name, duration);
    }

    async function playMelody() {
        await Tone.start(); // Required to resume audio context in some browsers
        // Stop and clear the transport
        Tone.Transport.stop();
        Tone.Transport.cancel();

        // Start the transport
        Tone.Transport.start();

        // Define a time variable to schedule notes
        let time = 0; // Start at 0, and increment based on note durations

        // Iterate through the notes
        for (const note of notes) {
            const {name, duration} = note;

            // Convert the duration to seconds
            const durationInSeconds = Tone.Time(duration).toSeconds();

            // Schedule the note
            Tone.Transport.schedule(time => {
                playNote(name, duration);
            }, time);

            // Increment the time by the duration of the note
            time += durationInSeconds;
        }
    }
</script>

<NoteRow {notes}/>
<button on:click={playMelody}>Play</button>
