<script>
    import { userStore } from "../depreated/stores.mjs";
    export let login = 0;
    //////////// AUTHORIZATION CODE
    // Variables used in this code
    var redirect_uri = "http://localhost:5173/";
    const AUTHORIZE = "https://accounts.spotify.com/authorize";
    const scope = "user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
    var client_id = import.meta.env.VITE_CLIENT_ID;
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
    function requestAccessToken() {
        client_id = localStorage.getItem("client_id");
        client_secret = localStorage.getItem("client_secret");

        // console.log("running onpageload")
        if ( window.location.search.length > 0 ) {
            // console.log('in on pageload()');
            handleRedirect();
            localStorage.setItem("login", "1")
            login = 1;
            // userStore.set(1);
            // location.reload();
            console.log(userStore)
            console.log("after loggedIn");
        }
        
    }
    function handleRedirect() {
        let code = getCode();
        fetchAccessToken(code);
        // window.history.pushState("", "", redirect_uri);
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
        let body = "grant_type=client_credentials";
        body += "&code=" + code;
        body += "redirect_uri=" + encodeURI(redirect_uri);
        body += "&client_id=" + client_id;
        body += "&client_secret=" + client_secret;
        callAuthorizationApi(body);
    }
    function callAuthorizationApi(body) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", TOKEN, true);
        xhr.setRequestHeader("Authorization", "Basic " + btoa(localStorage.getItem("client_id").toString() + ":" + localStorage.getItem("client_secret").toString()));
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(body);
        xhr.onloadend = handleAuthorizationResponse;
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
        }
        else {
            console.log(this.responseText);
            alert(this.responseText)
        }
    }
    /////// END OF AUTHORIZATION CODE
</script>


<div>
    <button on:click={requestAuthorization} type="button">1. Request Authorization</button>
    <button on:click={requestAccessToken} type="button">2. Request Access Token</button>
</div>