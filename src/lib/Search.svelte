<script>
    import searchIcon from "../assets/search.svg";
    import { getCode } from "../scripts/authenticate";
    import Results from "./Results.svelte";
    let searchResults = "";
    let searchInput = "";
    
    ///////////// BEGINNNING OF SEARCH CODE
    var SPOTIFY_ACCESS_TOKEN = "";
    const SEARCH = "https://api.spotify.com/v1/search";
    // const limit = 50; // default limit = 20
    // const range = 10; // range between 0 and 50 allowed

    // Search Spotify using Access Token
    async function search(e) {
        getAccessToken();
        let data = await requestSearch();
        searchResults = data.tracks.items;
        console.log(searchResults);
    }
    // Build your search query from user input
    function getRequestURL() {
        let body = "?q=" + searchInput;
        body += "&type=track";
        return body;
    }
    // Send the request to Spotify and get the response
    async function requestSearch() {
        let response = await fetch(SEARCH + getRequestURL(), {
            method: "GET",
            headers: {
                Authorization : `Bearer ${SPOTIFY_ACCESS_TOKEN}`,
            },
        });
        let data = await response.json();
        return data;
    }
    // function requestSearch() {
    //     let xhr = new XMLHttpRequest();
    //     xhr.open("GET", SEARCH + getRequestURL(), true);
    //     xhr.setRequestHeader("Authorization", "Bearer" + SPOTIFY_ACCESS_TOKEN);
    //     xhr.send();
    //     xhr.onloadend = fillContent;
    // }

    // get the access token from local storage
    function getAccessToken() {
        SPOTIFY_ACCESS_TOKEN = localStorage.getItem("access_token");
        // console.log(SPOTIFY_ACCESS_TOKEN);
    }
    ///////////////////////////////// END OF SEARCH CODE


</script>

<div class="search">
    <div class="search-menu">
        <img src={searchIcon} alt="search-icon" class="icon">
        <form on:submit|preventDefault class="form">
            <input bind:value={searchInput} on:keyup={search} type="text" name="search" placeholder="Search Spotify" id="q">
        </form>
    </div>
    <div class="results">
        {#if searchInput}
        <Results bind:results={searchResults}/>
        {:else}
            Nothing found
        {/if}
    </div>
</div>

<style>
    .search{
        display: inline-grid;
        grid-template-columns: 100%;
        grid-template-rows: auto auto;
        min-width: 60%;
        max-width: 100%;
        min-height: 50px;
        max-height: 20%;
        border-style: solid;
        border-width: 1px;
        border-radius: 40px;
        border-color: white;
        margin: 15px;
    }
    .search-menu {
        display: inline-grid;
        grid-template-columns: 2fr 6fr 1fr;
    }
    img {
        filter: invert(60%);
        margin: auto;
        padding: auto;
        width: 30px;
        height: auto;
    }
    form {
        display: inline-block;
        margin: 10px auto 10px auto;
        /* grid-area: auto; */
        /* grid-column-start: 2;
        grid-column-end: 2; */
        width: 100%;
        height: auto;
    }
    input {
        /* top: 50%; */
        font-size: x-large;
        font-family: 'Times New Roman', serif;
        margin: 0;
        padding: 0;
        /* margin: 0 0 0 0; */
        width: 100%;
        height: 80%;
    }
    .results {
        text-align: center;
    }
</style>