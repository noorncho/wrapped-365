//Spotify Authentication Stuff

export const clientId = "0605dfd632b84dc1a5e212132ca654b7";
export const clientSecret = "94b1824b8ad64caf845c9394585f3a2a";
export const authEndpoint = 'https://accounts.spotify.com/authorize';
export const redirectURL = "http://localhost:3000/redirect";

export const scope = [
    'user-top-read',
    'user-follow-read',
    'user-read-recently-played',
    'user-read-currently-playing',
    'streaming'
];

export const getAuthentication = () =>{
    let url = authEndpoint;
    url += '?client_id=' + clientId;
    url += '&redirect_uri=' + redirectURL;
    url += '&scope=' + scope.join("%20");
    url += "&response_type=token";
    url += "&show_dialog=true";

    window.location.href = url;
}