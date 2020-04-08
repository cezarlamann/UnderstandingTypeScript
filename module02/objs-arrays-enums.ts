// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // -> tuple
// } = {
//     name: 'Cezar',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'Author'] // -> tuple
// };

/**
 * Tuples is a special case of an array where TS can enforce
 * types per positions and length of a tuple, however you can
 * still push objects to it.
 */

enum Role { ADMIN = 999, READ_ONLY = 1, AUTHOR, OTHER = 'OTHER' }; // AUTHOR = 2

const person = {
    name: 'Cezar',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    //role: [2, 'Author'] // -> tuple
    role: Role.ADMIN
};


let favoriteActivities: string[];
favoriteActivities = ['Music'];

let anyArray: any[];
anyArray = ['lalala', 1];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

console.log(person);