
var redirect_uri = "http://localhost:5173/";
const AUTHORIZE = "https://accounts.spotify.com/authorize";
const scope = "user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";

const baseURL = "https://api.spotify.com/search";
// example query to use for testing
var query = "q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album&limit=50"; // search query string to construct

const limit = 50; // default limit = 20
const range = 10; // range between 0 and 50 allowed


function requestAuthorization() {
    client_id = "b3ba61894b894cd387eebf6f58371223";
    client_secret = "313907ff1be24710a492c10dff8c676f"; // remove the client secret later
    localStorage.setItem("client_id", client_id);
    localStorage.setItem("client_secret", client_secret);

    let url = AUTHORIZE;
    url += "?client_id=" + client_id;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(redirect_uri);
    url += "&show_dialog=true";
    url += "&scope=" + scope;

}
