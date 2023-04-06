import { AnotherWorld, World } from "../src/World";

describe("World", () => {
    test("World returns 'World'", () => {
        expect(World()).toBe("World");
    });

    test("AnotherWorld returns 'AnotherWorld'", () => {
        expect(AnotherWorld()).toBe("AnotherWorld");
    });
});
