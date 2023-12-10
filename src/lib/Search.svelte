<script>
    import searchIcon from "../assets/search.svg";
    import { getCode } from "../scripts/authenticate";
    let searchInput = "";

    
    
    ///////////// BEGINNNING OF SEARCH CODE
    var SPOTIFY_ACCESS_TOKEN = "";
    const SEARCH = "https://api.spotify.com/v1/search";
    // const limit = 50; // default limit = 20
    // const range = 10; // range between 0 and 50 allowed

    // Search Spotify using Access Token
    function search(e) {
        getAccessToken();
        let data = requestSearch();
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
        // let data = JSON.parse(response);
        return response;
    }
    // function requestSearch() {
    //     let xhr = new XMLHttpRequest();
    //     xhr.open("GET", SEARCH + getRequestURL(), true);
    //     xhr.setRequestHeader("Authorization", "Bearer" + SPOTIFY_ACCESS_TOKEN);
    //     xhr.send();
    //     xhr.onloadend = fillContent;
    // }

    // fill an element with content received from response
    function fillContent(){

    }
    // get the access token from local storage
    function getAccessToken() {
        SPOTIFY_ACCESS_TOKEN = localStorage.getItem("access_token");
        // console.log(SPOTIFY_ACCESS_TOKEN);
    }
    ///////////////////////////////// END OF SEARCH CODE


</script>

<div class="search">
    <img src={searchIcon} alt="search-icon">
    <form on:submit|preventDefault action="">
        <input bind:value={searchInput} on:keyup={search} type="text" name="search" placeholder="Search Spotify" id="q">
    </form>
</div>

<style>
    .search {
        display: inline-grid;
        grid-template-columns: 15% 85%;
        grid-template-rows: auto;
        min-width: 60%;
        max-width: 100%;
        min-height: 50px;
        max-height: 20%;
        border-style: solid;
        border-width: 1px;
        border-radius: 20px;
        border-color: white;
        margin: 15px;
    }
    img {
        filter: invert(60%);
        margin: auto 5px auto auto;
        text-align: right;
        padding: auto;
        grid-column-start: 1;
        grid-column-end: 1;
        width: 30px;
        height: auto;
    }
    form {
        margin: 10px auto 10px 5px;
        grid-column-start: 2;
        grid-column-end: 2;
        width: 90%;
        height: auto;
    }
    input {
        top: 50%;
        margin: 0;
        padding: auto;
        margin: 0 0 0 0;
        width: 90%;
        height: 80%;
    }
</style>