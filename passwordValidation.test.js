const { passwordValidation } = require("./passwordValidation");
describe("passwordValidation", () => {
  it("should return undefined", () => {
    expect(passwordValidation()).toBe(undefined);
  });
});
