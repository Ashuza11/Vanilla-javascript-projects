/**
 * Interagit avec l'API JSON
 * @param {string} url 
 * @param {Request & {json?: object}} options
 */

export async function fetchJSON(url, options = {}) { 
    const headers = {Accept: 'application/json, ...options.headers}'};
    if (options.json) {
        options.body = JSON.stringify(options.json)
        headers['Content-Type'] = 'application/json'
    }
    const response = await fetch(url, {...options, headers});

    if (!response.ok) {
        throw new Error('Erreur serveur', {cause: response});
    }
    return await response.json()
}