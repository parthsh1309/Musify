
require('dotenv').config({ path: './config/.env' });

const BaseUrl = 'https://api.spotify.com/v1';

const tokenBaseUrl = 'https://accounts.spotify.com/api';

const clientId = process.env.client_id;

const clientSecret = process.env.client_secret;

const redirectUri = process.env.redirect_uri;

const scopes = process.env.scopes;

const stateKey = 'spotify_auth_state';

const market = 'IN';
const lowLimit = 12;
const defaultLimit = 28;

module.exports = {
    BaseUrl,
    tokenBaseUrl,
    clientId,
    clientSecret,
    redirectUri,
    scopes,
    stateKey,
    market,
    lowLimit,
    defaultLimit
}