import { writable } from "svelte/store";


export const ToDoStore = writable([]);
export const TimerStore = writable([{value: 25,timername: 'Work'}]);