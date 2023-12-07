import {writable} from 'svelte/store';

export const route = writable("#home");

export const userStore = writable({ isLoggedIn: false, user: null});