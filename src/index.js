module.exports = function check(str, bracketsConfig) {
	let isOk, bracketsSubstr;

	while (true) {
		isOk = false;
		bracketsConfig.forEach(item => {
			bracketsSubstr = item.join('');
			if (str.includes(bracketsSubstr)) {
				str = str.replace(bracketsSubstr, '');
				isOk = true;
			}
		});
		if (!isOk) {
			break;
		}
	}

	return (str.length === 0) ? true : false;
};