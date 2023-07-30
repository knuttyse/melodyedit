import random from 'random'
import * as Scale from '@tonaljs/scale';


const keys = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'Bb',
    'B',
]

function getRandomKey(): string {
    //return random.choice(keys) + "4 major"
    return "C4 major"
}

function getNextDegree(currentDegree: number): number {
    return currentDegree + random.int(-2, 2)
}

export function generateNotes(n: number): { name: string, duration: string }[] {

    const startingDegree = 0
    const degrees = [startingDegree]
    for (let i = 0; i < n; i++) {
        degrees.push(
            getNextDegree(degrees[degrees.length - 1])
        )
    }

    const key = getRandomKey()

    const noteNames = degrees.map(Scale.steps(key));

    return noteNames.map(name => {
        return {
            name,
            duration: '1/4'
        };
    })

}