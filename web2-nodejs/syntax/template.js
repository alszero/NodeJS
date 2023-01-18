// 템플릿 리터럴 적용
// 리터럴이 의미하는 바는 '문자열 그 자체가 값을 나타내는 것'
// 역따옴표로 묶어서 표현
var name = 'egoing';
var letter = `Dear ${name}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.${name}Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ${name} qui officia deserunt mollit anim id est laborum. ${name}`;
console.log(letter);