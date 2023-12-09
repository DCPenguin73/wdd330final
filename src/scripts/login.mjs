/******************************************
 * Generate a code challenge for security
 * Functions for this step include 
 * - generateRandomString
 * - sha256
 * base6
 ******************************************/
import { userStore } from "../lib/stores.mjs";
const generateRandomString = (Length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

const sha256 = async (plain) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
}

const base64encode = (input) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

export async function getCodeChallenge() {
    const codeVerifier = generateRandomString(64);
    const hashed = await sha256(codeVerifier);
    const codeChallenge = base64encode(hashed);
    console.log(await `${codeVerifier} ${hashed} ${codeChallenge}` );
    return await codeChallenge
}
////////////////////////////////////////////////////

export async function getAccessToken() {
    let code_verifier;
    async function init() {
        code_verifier = await getCodeChallenge();
        return code_verifier;
    }
    code_verifier = init();
    const client_id = import.meta.env.VITE_CLIENT_ID;
    const redirect_uri = "http://localhost:5173/";

    const scope = "user-read-private user-read-email";
    const authUrl = new URL(`https://accounts.spotify.com/authorize`);

    // generated in the previous step
    window.localStorage.setItem("code_verifier", await code_verifier);

    const params = {
    response_type: "code",
    client_id: client_id,
    scope,
    code_challenge_method: "S256",
    code_challenge: await code_verifier,
    redirect_uri: redirect_uri,
    };

    console.log(`In app.svelte ${params.code_challenge}`);
    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();

    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get("code");

    const getToken = async code => {
        // Stored in the previous step
        let code_verifier = localStorage.getItem("code_verifier");
        
        const payload = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: client_id,
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: redirect_uri,
                code_verifier: code_verifier,
            }),
        };

        const url = "https://accounts.spotify.com/api/token";
        const body = await fetch(url, payload);
        const response = await body.json();
        console.log(`response: ${response}`);
        return response;
    }
    let response = await getToken(code);
    console.log(response);
    
}