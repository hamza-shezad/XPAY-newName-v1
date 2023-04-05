import { User } from "../src/User";

describe("User", () => {
    test("should output correct name", () => {
        const user = new User("John");
        expect(user.getName()).toBe("John");
    });

    test("should output correct salutation", () => {
        const user = new User("John");
        expect(user.salutation()).toBe("Hello John");
    });
});
