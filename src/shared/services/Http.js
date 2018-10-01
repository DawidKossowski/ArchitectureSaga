class Http {
    constructor(url) {
        this.url = url;
    }

    async get(endpoint) {
        const response = await fetch(`${this.url}${endpoint}`);
        return response.json();
    }
}

export const http = new Http('https://reqres.in/api/');
