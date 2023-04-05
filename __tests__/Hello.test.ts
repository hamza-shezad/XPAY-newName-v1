import { Hello, HelloArg, HelloWorld } from "../src/Hello";

describe("Hello.ts", () => {
    test("Hello returns 'Hello'", () => {
        expect(Hello()).toBe("Hello");
    });

    test("HelloWorld returns 'HelloWorld'", () => {
        expect(HelloWorld()).toBe("Hello World");
    });

    test("HelloArg returns correctly with different arguments", () => {
        expect(HelloArg("World")).toBe("Hello World");
        expect(HelloArg("Earth")).toBe("Hello Earth");
        expect(HelloArg("")).toBe("Hello ");
        expect(HelloArg(" ")).toBe("Hello  ");
    });
});
