const passwordValidation = password => {
  function passwordIncludesLowerCase(password) {
    if (password.length >= 8) {
      const passwordArray = password.split("");
      return passwordArray.some(item => {
        return item === item.toLowerCase();
      });
    }
    return false;
  }

  function passwordIncludesNumber(password) {
    const passwordArray = password.split("");
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    return passwordArray.some(includesNum);
    function includesNum(num) {
      return numbers.includes(num);
    }
  }

  return (
    password.length >= 8 &&
    passwordIncludesNumber(password) &&
    passwordIncludesLowerCase(password)
  );
};

module.exports = passwordValidation;
