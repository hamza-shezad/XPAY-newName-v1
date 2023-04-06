export class User {
    private name: string;
    private dob: Date;

    constructor(name: string, dob: Date) {
        this.name = name;
        this.dob = dob;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        const now = new Date();
        return now.getFullYear() - this.dob.getFullYear();
    }

    salutation(): string {
        return "Hello " + this.getName();
    }
}
