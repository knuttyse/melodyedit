import * as Tone from "tone";

type Note = {
    name: string
    duration: string
}

type Synth = {
    triggerAttackRelease(name: string, duration: string): void
}

function playNote(synth: Synth, {name, duration}: Note) {
    synth?.triggerAttackRelease(name, duration);
}

export async function playNotes(synth: Synth, notes: Note[]) {
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
        // Convert the duration to seconds
        const durationInSeconds = Tone.Time(note.duration).toSeconds();

        // Schedule the note
        Tone.Transport.schedule(time => {
            playNote(synth, note);
        }, time);

        // Increment the time by the duration of the note
        time += durationInSeconds;
    }
}