import {writable} from 'svelte/store';

export const route = writable("#home");

export let userStore = writable(0);

