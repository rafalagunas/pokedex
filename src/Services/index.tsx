async function getData<Response>(url: string): Promise<Response> {
    const response = await fetch(url);
    const data = await response.json() as Promise<Response>
    return data;
}

export { getData }