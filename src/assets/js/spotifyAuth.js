//Spotify Authentication Stuff

export const clientId = "0605dfd632b84dc1a5e212132ca654b7";
export const clientSecret = "94b1824b8ad64caf845c9394585f3a2a";
export const authEndpoint = 'https://accounts.spotify.com/authorize';
export const redirectURL = "http://localhost:3000";

export const scope = [
    'user-top-read',
    'user-follow-read',
    'user-read-recently-played',
    'user-read-currently-playing',
    'streaming'
];

//Get the has URL
export const hash = window.location.hash.substring(1)
                    .split("&")
                    .reduce(function(initial, item) {
                        if (item) {
                            var parts = item.split("=");
                            initial[parts[0]] = decodeURIComponent(parts[1]);
                        }
                        return initial;
                    }, {});

export let url = authEndpoint;
url += "?response_type=token";
url += '&client_id=' + encodeURIComponent(clientId);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirectURL);

window.location.hash = "";