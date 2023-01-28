<script>
import { onDestroy } from 'svelte';
import { tweened } from 'svelte/motion';



export let original; //minutes * 60 
export let timername;
let timer = tweened(original * 60);

$: minutes = Math.floor($timer / 60);
$: seconds = Math.floor($timer - minutes * 60);

let timerID;


const buttonStartTimer = () => 
{
    if (!timerID) {
        timerID = setInterval(() => 
        { if ($timer > 0)
            {
                $timer--;
            }
        }, 1000); //delay in ms
    }
}

const stopTimer = () => {
    clearInterval(timerID);
    timerID = null;
}


const resetTimer = () => {
    $timer = original * 60;
    stopTimer();
}

const addFiveMinutes = () => {
    $timer = $timer + 5 * 60;
}

function EditTimerValue(){
    $timer = $timer;
}




</script>

<div class="flex">
    <h2>{timername} period: <br><br> <span class="mins">{minutes}</span>min 
    <span class="secs">{seconds}</span>s</h2>
</div>

<input placeholder="Enter timer value" bind:value={$timer} on:keydown={(e) => {if(e.key == "Enter") EditTimerValue()}}>


<button on:click={buttonStartTimer}>Start timer</button>

<button on:click={addFiveMinutes}>Add 5 Minutes</button>

<button on:click={resetTimer}>Reset</button>

<button on:click={stopTimer}>Stop</button>

<style>

</style>
