<script>
import { onDestroy } from 'svelte';
import { tweened } from 'svelte/motion';
import { writable } from 'svelte/store';

let original = 25 * 60; //minutes * 60 
let timer = tweened(original);
let stopTimer = false;

$: minutes = Math.floor($timer / 60);
$: seconds = Math.floor($timer - minutes * 60);

export let minutes;
export let seconds;

const buttonStartTimer = () => 
{
    stopTimer = false;

    setInterval(() => 
    { if ($timer > 0 && stopTimer == false)
        {
            $timer--;
        }
    }, 1000); //delay in ms
}

const resetTimer = () => {
    $timer = original;
    stopTimer = true;
}

const addFiveMinutes = () => {
    $timer = $timer + 5 * 60;
}

/*
const buttonStartTimer = () => 
{
    stopTimer = false;

    setInterval(() => 
    { if ($timer > 0 && stopTimer == false)
        {
            $timer--;
        }
    }, 1000); //delay in ms
}
*/


</script>

<button on:click={buttonStartTimer}>Start timer</button>

<button on:click={addFiveMinutes}>Add 5 Minutes</button>

<button on:click={resetTimer}>Reset</button>

<style>

</style>
