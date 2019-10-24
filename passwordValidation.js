module.exports.passwordValidation = password => {
	if (password.length >= 8) {
		const passwordArray = password.split("");
		return passwordArray.some(item => {
			return item === item.toLowerCase();
        });
    }
    return false;
};
