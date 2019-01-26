import { hello } from './App';

describe("Your function", () => {
    it("should work for basic tests", () => {
      expect(hello("hello")).toBe("hello");
    });
});