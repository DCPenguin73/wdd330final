import {writable} from 'svelte/store';

export const route = writable("#home");

export let userStore = writable({ isLoggedIn: false});

export function loggedIn(){
    const check = localStorage.getItem("code_verifier")
    if(check != null){
        userStore = writable({isLoggedIn: true});
    }
}