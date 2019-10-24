const passwordValidation = require("./passwordValidation");

describe("passwordValidation", () => {
  it("should return true if have 8 characters or more", () => {
    expect(passwordValidation("1234567b")).toBe(true);
    expect(passwordValidation("1234567a")).toBe(true);
  });

  it("should return false if password have less than 8 characters", () => {
    expect(passwordValidation("12345")).toBe(false);
    expect(passwordValidation("1234567")).toBe(false);
  });
  describe("should contain at least one lowercase character", () => {
    it("should return false if there are no lowercase characters", () => {
      expect(passwordValidation("ABCDEFGH")).toBe(false);
    });

    it("should return true if there at least one lowercase characters", () => {
      expect(passwordValidation("aBCDE123")).toBe(true);
    });
    it("should return true if there at least two lowercase characters", () => {
      expect(passwordValidation("AbcDxE123")).toBe(true);
    });
  });

  it("should return true if password have a numba", () => {
    expect(passwordValidation("abcdefg1")).toBe(true);
  });
  it("should return true if password have a numba", () => {
    expect(passwordValidation("abcde")).toBe(false);
  });
});
