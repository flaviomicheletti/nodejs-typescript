export function makeUrl(): string {

    return Math.random().toString(36).substring(2, 8);

    // talvez existam formas mais interessantes para criar a URL
    // url.short = await url.replace(/([^A-Za-z0-9])/, '').slice(1,6);

}