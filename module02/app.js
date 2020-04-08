// the "never" type
// this function never returns because it always throws
// function generateError(message: string, errorCode: number) : never
function generateError(message, errorCode) {
    throw { message: message, errorCode: errorCode };
}
// unknown vs any
//let userInput: unknown;
var userInput;
var userInput2;
var userName;
userInput = 5;
userInput = "Name";
// ERROR: unknown is not assignable to string directly
//userName = userInput;
// "any" disables type checking
userName = userInput2;
if (typeof userInput === "string") {
    // now we can assign unknown to string
    // because of the typeof check
    userName = userInput;
}
var result = generateError("Error occurred.", 500);
console.log(result);
