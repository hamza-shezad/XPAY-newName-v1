import { Hello, HelloWorld } from "../src/Hello";

describe("Hello.ts", () => {
    test("Hello returns 'Hello'", () => {
        expect(Hello()).toBe("Hello");
    });

    test("HelloWorld returns 'HelloWorld'", () => {
        expect(HelloWorld()).toBe("HelloWorld");
    });
});
