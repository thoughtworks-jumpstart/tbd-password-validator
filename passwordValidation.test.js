const { passwordValidation } = require("./passwordValidation");
describe("passwordValidation", () => {
  it("should return true if have 8 characters or more", () => {
    expect(passwordValidation("12345678")).toBe(true);
    expect(passwordValidation("1234567890")).toBe(true);
  });

  it("should return false if password have less than 8 characters", () => {
    expect(passwordValidation("12345")).toBe(false);
    expect(passwordValidation("1234567")).toBe(false);
  });
});
