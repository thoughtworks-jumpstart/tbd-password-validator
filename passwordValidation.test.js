const { passwordValidation } = require("./passwordValidation");
describe("passwordValidation", () => {
  it("should return true if have a minimum of 8 characters", () => {
    expect(passwordValidation("1234567")).toBe(false);
    expect(passwordValidation("12345678")).toBe(true);
  });
});
