export function Hello(): string {
    return "Hello";
}


export function HelloWorld(): string {
    return "Hello" + " " + "World";
}

export function HelloArg(name: string): string {
    return Hello() + " " + name;
}
