type GenericNumberStringUnion = number|string;
type ResultLiteralUnion = "literal1"|"literal2";
/**
 *
 * type GenericNumberStringUnion = number|string;
 * type ResultLiteralUnion = "literal1"|"literal2";
 * function log2(x1 : GenericNumberStringUnion, x2: ResultLiteralUnion)
 */
function log2(x1 : GenericNumberStringUnion, x2: ResultLiteralUnion){
    var x1Type = typeof x1;
    var x2Type = typeof x2;

    console.log({
        x1_type: x1Type,
        x2_type: x2Type,
        x1_val: x1,
        x2_val: x2
    });
}

type User = { name: string } | string;
let u1: User = {name: 'Max'};
u1 = 'Michael';

//Unions: type1|type2
// function combine (n1: number|string, n2: number|string, resultLiteral: "literal1"|"literal2")
function combine (n1: number|string, n2: number|string, resultLiteral: "literal1"|"literal2"){
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    else{
        result = n1.toString() + n2.toString();
    }

    if (resultLiteral === "literal1") {
        console.log("Literal 1 is set");
    }
    // just testing TS intellisense on VSCode (it restricts the options)
    if (resultLiteral === "literal2") {
        console.log("Literal 2 is set");
    }

    return result;
}

const combinedAges = combine(30, 26, "literal1");
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna', "literal2");
console.log(combinedNames);

log2(2, "literal1");
log2("a", "literal2");