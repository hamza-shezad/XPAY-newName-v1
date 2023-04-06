import { AnotherWorld, World } from "../src/World";

describe("World", () => {
    test("World returns 'World'", () => {
        expect(World()).toBe("World");
    });

    test("AnotherWorld returns 'Another World'", () => {
        expect(AnotherWorld()).toBe("Another World");
    });
});
