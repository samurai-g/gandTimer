<script>
	
	import Nested from './Nested.svelte';
	import Timer from './Timer.svelte';
	import {ToDoStore} from './stores';
	import { writable } from 'svelte/store';
	import {TimerStore} from './stores';

	let newTodo;

	let backgroundColor = 'white';	
	let oppositeTheme = 'dark';

	//To-Do List
	let newTask = '...';

	//Reactive values ($:)



	//functions are also declared here

	const darkThemeToggle = () => {
		//an inline (shorthand) if and assigns the value to color
		backgroundColor = backgroundColor === 'white' ? 'black' : 'white';
		oppositeTheme = oppositeTheme === 'dark' ? 'light' : 'dark';
	}

	//arrays look like this (watch out for [],{},:) data used in each loop down in main
	let users = [
		{
			id: '1',
			name: 'Max'
		},
		{
			id: '2',
			name: 'Moriz'
		},
	]

	$ToDoStore = [...$ToDoStore, {
			statusDone: false,
			text: 'Finish gandalan timer'
		}];

	function AddNewTodo(){
		let todoObject = {
		statusDone: false,
		text: newTodo
	};
		$ToDoStore = [...$ToDoStore, todoObject];	
	newTodo = null;
	};

	let newTimerValue;

	$TimerStore = [...$TimerStore, {
		value: 5,
		timername: 'Relax'
	}];


</script>

<main style="background-color: {backgroundColor}">

	<h1>Gandalan<br>timer</h1>
	
	<h2>Whats your focus today?</h2>
	<input placeholder="..." bind:value={newTodo} on:keydown={(e) => {if(e.key == "Enter") AddNewTodo()}}>
	<br/>	


	{#each $ToDoStore as todoItem}
		<input
			type=checkbox
			bind:checked={todoItem.statusDone}
		>
		<input
			placeholder="What needs to be done?"
			bind:value={todoItem.text}
			disabled={todoItem.statusDone} class:statusDone={todoItem.statusDone}
		>
	<br/>
	{/each}

	{#each $TimerStore as timerItem}
		<Timer original={timerItem.value} timername={timerItem.timername}></Timer>
	{/each}



	<div class="flex">
		<button on:click={darkThemeToggle}>Change to {oppositeTheme} theme</button>
	</div>

	<!--<progress value={$timer - original}></progress>-->

	

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		color: #b4d175;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
		font-weight: 300;
	}

	h2 {
		font-family:Verdana, Geneva, Tahoma, sans-serif;
		color: darkolivegreen;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	.statusDone{
		opacity: 0.5;
		color: rgba(54, 54, 58, 0.5);
	}
	</style>