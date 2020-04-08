function add (n1: number, n2: number, printResult: boolean, phrase: string){
    const result = n1 + n2;
    if (printResult) {
        console.log(phrase + result);
    }
    return result;
}

const number1 = 5;
const number2 = 2.8;

const printResult = true;
const resPhrase = 'result is: '

add(number1, number2, printResult, resPhrase);