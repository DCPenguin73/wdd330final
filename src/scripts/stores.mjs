import {writable} from 'svelte/store';

export const route = writable("#home");

export let userStore = writable(0);

// function loggedIn(){
//     console.log(`In logged in`);
//     const check = localStorage.getItem("access_token")
//     console.log(check);
//     if(check != null){
//         console.log(`Hello`);
//         userStore = writable({isLoggedIn: true});
//         console.log(userStore.subscribe)
//     }
// }

