import {testMethod} from "../index";

test("create a new hello", () => {
    expect(testMethod("World")).toBe("Hello World");
});