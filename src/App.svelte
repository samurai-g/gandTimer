<script>
	
	import Nested from './Nested.svelte';
	import Timer from './Timer.svelte';

	let minutes;
	let seconds;



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

	let todos = [
		{
			statusDone: false,
			text: 'Finish gandalan timer'
		},
	]

</script>

<main style="background-color: {backgroundColor}">
	<h1>Gandalan<br>timer</h1>
	
	<h2>Whats your focus today?</h2>
	<input bind:value={newTask}>
	
	<div class:done={todos.at(0).done}>
		<input
			type=checkbox
			checked={todos.at(0).done}
		>
		<input
			placeholder="What needs to be done?"
			value={todos.at(0).text}
		>
	</div>

	<div class="flex">
		<h2>Current work period: <br><br> <span class="mins">{minutes}</span>min 
		<span class="secs">{seconds}</span>s</h2>
	</div>

	<Timer bind:minutes bind:seconds></Timer>

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
</style>