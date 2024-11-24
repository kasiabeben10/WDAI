const LOWERCASE_ASCII_CODES = codesArray(97,122);
const UPPERCASE_ASCII_CODES = codesArray(65, 90);
const NUMBERS_ASCII_CODES = codesArray(48, 57);
const SYMBOLS_ASCII_CODES = codesArray(33, 47).concat(codesArray(58,64)).concat(codesArray(91,96)).concat(codesArray(123,126));
const form = document.getElementById("form");

function generatePassword() {
    const minLength = form.minLength.value;
    const maxLength = form.maxLength.value;
    const capitalLetters = form.capitalLetters.checked;
    const specialCharacters = form.specialCharacters.checked;

    // const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    // const numbers = "1234567890";
    // const symbols = "@#$%^&*()_+~|}{[]></-=";
	let passwordLength = getRandomLength(minLength,maxLength);
	return getPassword(passwordLength, capitalLetters, specialCharacters);    
}


function getRandomLength(min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function codesArray(start, end){
	const array = [];
	for (let i = start; i<= end; i++) {
		array.push(i);
	}
	return array;
}

function getPassword(passwordLength, capitalLetters, specialCharacters){
	let characterCodesPool = LOWERCASE_ASCII_CODES.concat(NUMBERS_ASCII_CODES);
	if (capitalLetters) {
		characterCodesPool = characterCodesPool.concat(UPPERCASE_ASCII_CODES);
	}
	if (specialCharacters) {
		characterCodesPool = characterCodesPool.concat(SYMBOLS_ASCII_CODES);
	}
	const password = [];
	for (let i = 0; i < passwordLength; i++){
		const randomCharacterCode = characterCodesPool[Math.floor(Math.random() * characterCodesPool.length)];
		password.push(String.fromCharCode(randomCharacterCode));
	
	}
	return password.join('');
}

form.addEventListener('submit', function(){
	const password = generatePassword();
	alert("Wygenerowane hasło: \n".concat(password));
});

