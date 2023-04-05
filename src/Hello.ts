export function Hello(name?: string): string {
    if (!name) {
        return "Hello";
    }

    const _name = name.trim();

    if (!_name) {
        return "Hello";
    }

    return "Hello" + " " + name.trim();
}
