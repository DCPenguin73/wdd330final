import {writable} from 'svelte/store';

export const route = writable("#home");

export let userStore = writable({ isLoggedIn: false});

export function loggedIn(){
    console.log(`In logged in`);
    const check = localStorage.getItem("code_verifier")
    console.log(check);
    if(check != null){
        console.log(`Hello`);
        userStore = writable({isLoggedIn: true});
    }
}