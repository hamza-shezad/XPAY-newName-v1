import { Hello } from "../src/Hello";

describe("Hello.ts", () => {
    test("Hello returns 'Hello'", () => {
        expect(Hello()).toBe("Hello");
    });

    test("Hello(name) returns correctly with different arguments", () => {
        expect(Hello("")).toBe("Hello");
        expect(Hello(" ")).toBe("Hello");
        expect(Hello("World")).toBe("Hello World");
        expect(Hello("Earth")).toBe("Hello Earth");
    });
});
