// // predefined vars to request authorization to a Spotify account
// var redirect_uri = "http://localhost:5173/";
// const AUTHORIZE = "https://accounts.spotify.com/authorize";
// const scope = "user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
// export function requestAuthorization() {
//     const client_id = "b3ba61894b894cd387eebf6f58371223";
//     const client_secret = "313907ff1be24710a492c10dff8c676f"; // remove the client secret later
//     localStorage.setItem("client_id", client_id);
//     localStorage.setItem("client_secret", client_secret);

//     let url = AUTHORIZE;
//     url += "?client_id=" + client_id;
//     url += "&response_type=code";
//     url += "&redirect_uri=" + encodeURI(redirect_uri);
//     url += "&show_dialog=true";
//     url += "&scope=" + scope;
//     window.location.href = url;
// }
// export function handleRedirect() {
//     let code = getCode();
//     fetchAccessToken(code);
// }
// export function getCode() {
//     let code = null;
//     const queryString = window.location.search;
//     if ( queryString.length > 0 ) {
//         const urlParams = new URLSearchParams(queryString);
//         code = urlParams.get("code");
//     }
//     return code;
// }
// export function fetchAccessToken(code) {
//     let body = "grant_type=authorization_code";
//     body += "&code=" + code;
//     body += "redirect_uri=" + encodeURI(redirect_uri);
// }