//Spotify Authentication Stuff

const clientId = "0605dfd632b84dc1a5e212132ca654b7";
const clientSecret = "94b1824b8ad64caf845c9394585f3a2a";
const authEndpoint = 'https://accounts.spotify.com/authorize';

const scope = [
    'user-top-read',
    'user-follow-read',
    'user-read-recently-played',
    'streaming'
]

const redirectURL = "http://localhost:3000";