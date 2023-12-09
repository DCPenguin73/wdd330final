<script>
    import searchIcon from "../assets/search.svg";
    // import * as authenticate from "../scripts/authenticate.js"
    

    // Variables used in this code
    var redirect_uri = "http://localhost:5173/";
    const AUTHORIZE = "https://accounts.spotify.com/authorize";
    const scope = "user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
    var client_id = import.meta.env.VITE_CLIENT_ID;;
    var client_secret = import.meta.env.VITE_CLIENT_SECRET;
    const TOKEN = "https://accounts.spotify.com/api/token";
    var access_token = "";
    var refresh_token = "";
    
    // predefined vars to request authorization to a Spotify account
    function requestAuthorization() {
        localStorage.setItem("client_id", client_id);
        localStorage.setItem("client_secret", client_secret);

        let url = AUTHORIZE;
        url += "?client_id=" + client_id;
        url += "&response_type=code";
        url += "&redirect_uri=" + encodeURI(redirect_uri);
        url += "&show_dialog=true";
        url += "&scope=" + scope;
        window.location.href = url;
    }
    // All of this code will be used to refresh the access token automatically. (broken)
    function onPageLoad() {
        client_id = localStorage.getItem("client_id");
        client_secret = localStorage.getItem("client_secret");

        console.log("running onpageload")
        if ( window.location.search.length > 0 ) {
            console.log('in on pageload()');
            handleRedirect();
        }
    }
    function handleRedirect() {
        let code = getCode();
        fetchAccessToken(code);
        window.history.pushState("", "", redirect_uri);
    }
    function getCode() {
        let code = null;
        const queryString = window.location.search;
        if ( queryString.length > 0 ) {
            const urlParams = new URLSearchParams(queryString);
            code = urlParams.get("code");
        }
        return code;
    }
    function fetchAccessToken(code) {
        let body = "grant_type=authorization_code";
        body += "&code=" + code;
        body += "redirect_uri=" + encodeURI(redirect_uri);
        body += "&client_id=" + client_id;
        body += "&client_secret=" + client_secret;
        callAuthorizationApi(body);
    }
    function callAuthorizationApi(body) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", TOKEN, true);
        xhr.setRequestHeader("Contet-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic " + btoa(client_id + ":" + client_secret));
        xhr.send(body);
        xhr.onload = handleAuthorizationResponse;
    }
    function handleAuthorizationResponse() {
        if ( this.status == 200 ) {
            var data = JSON.parse(this.responseText);
            console.log(data);
            var data = JSON.parse(this.responseText);
            if ( data.access_token != undefined ) {
                access_token = data.access_token;
                localStorage.setItem("access_token", access_token);
            }
            if( data.refresh_token != undefined ) {
                refresh_token = data.refresh_token;
                localStorage.setItem("refresh_token", refresh_token);
            }
            onPageLoad();
        }
        else {
            console.log(this.responseText);
            alert(this.responseText)
        }
    }

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


<div on:load={onPageLoad} class="search">
    <img src={searchIcon} alt="search-icon">
    <form action="">
        <input on:change={onChange} type="text" name="search" placeholder="Search Spotify">
    </form>
</div>
<div>
    <button on:click={requestAuthorization} type="button">Request Authorization</button>
    <button on:click={onPageLoad} type="button">Refresh Access Token (broken)</button>
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