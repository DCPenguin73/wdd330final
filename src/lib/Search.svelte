<script>
    import searchIcon from "../assets/search.svg";
    // import * as authenticate from "../scripts/authenticate.js"
    


    // code to get the currently playing song
    const SPOTIFY_ACCESS_TOKEN = "";
    function getTrack() {
        var currentTrackInfo = getCurrentTrack(SPOTIFY_ACCESS_TOKEN)
    }
    function getCurrentTrack(accessToken) {
        // response = fetch()
    }

    const baseURL = "https://api.spotify.com/search";
    var query = "q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album&limit=50"; // search query string to construct

    const limit = 50; // default limit = 20
    const range = 10; // range between 0 and 50 allowed

    function onChange(e) {
        // search_spotify(token, text);
        console.log("SEARCHING")
    }

</script>

<div class="search">
    <img src={searchIcon} alt="search-icon">
    <form action="">
        <input on:change={onChange} type="text" name="search" placeholder="Search Spotify">
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