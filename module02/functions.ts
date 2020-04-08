// Return type is optional...
//
// function add(n1: number, n2: number) : number { -> returns number
function add(n1: number, n2: number) : number {
    return n1 + n2;
}

// function printResult(num: number) : void { -> void
function printResult(num: number) : void {
    console.log("Result: " + num);
}

// function printResultReturningUndefined(num: number) : undefined { -> undefined
function printResultReturningUndefined(num: number) : undefined {
    console.log("Result: " + num);
    return;
}

//function addAndHandle(n1: number, n2: number, callback: (num: number) => void)
//
// by defining the callback return type as void, we "signal" that we will
// not use any results that the callback may return. So, it can return
// whatever it would like without problems. Flexibility!
function addAndHandle(n1: number, n2: number, callback: (num: number) => void){
    var res = n1 + n2;
    callback(res);
}

// setting type to "Function" type like this: let combineValues: Function = add;
let combineValues: Function = add;

// let combineValuesFnType: (a: number, b: number) => number; -> DELEGATES!!!
let combineValuesFnType: (a: number, b: number) => number;
combineValuesFnType = add;

console.log(printResult(add(2,3)));
console.log(printResultReturningUndefined(add(2,3)));
console.log(combineValues(2,4));
console.log(combineValuesFnType(2,5));
addAndHandle(10, 15, (num) => console.log("Result: " + num));