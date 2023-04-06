import { User } from "../src/User";

describe("User", () => {
    const user = new User("John", new Date(2000, 1, 1));

    test("should output correct name", () => {
        expect(user.getName()).toBe("John");
    });

    test("should output correct birthday", () => {
        expect(user.getAge()).toBe(23);
    });

    test("should output correct salutation", () => {
        expect(user.salutation()).toBe("Hello John");
    });
});
