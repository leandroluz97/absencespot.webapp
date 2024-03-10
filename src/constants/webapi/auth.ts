import { BASE_URL } from '../utils/constants';

export const GetGoogleAuthenticationUrl = async (nonce: string) => {
    const clientId = '1034309601198-ndgjuis6j96167s0ejd1aij5pqutuucr.apps.googleusercontent.com';
    const responseType = 'code';
    const state = 'google';
    return (
        'https://accounts.google.com/o/oauth2/v2/auth?' +
        ('&response_type=' + responseType) +
        ('&client_id=' + clientId) +
        ('&scope=' + encodeURIComponent('openid email profile')) +
        ('&redirect_uri=' + encodeURIComponent(BASE_URL)) +
        ('&nonce=' + nonce) +
        ('&state=' + state)
    );
};

export const GetMicrosoftAuthenticationUrl = (codeChallenge: string) => {
    const clientId = '390febc1-4480-4ad9-840f-771a20933684';
    const responseType = 'code';
    const responseMode = 'query';
    const state = 'microsoft';
    const hashAlgorithm = 'S256';
    return (
        'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?' +
        ('&response_type=' + responseType) +
        ('&response_mode=' + responseMode) +
        ('&client_id=' + clientId) +
        ('&scope=' + encodeURIComponent('openid profile user.read offline_access')) +
        ('&redirect_uri=' + encodeURIComponent(BASE_URL)) +
        ('&code_challenge=' + codeChallenge) +
        ('&code_challenge_method=' + hashAlgorithm) +
        ('&state=' + state)
    );
};

function generateRandomString(length: number) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier: string) {
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier));
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}
