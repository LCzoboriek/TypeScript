// const person: {
//   name: string; //Key: Type Values for the object
//   age: number;
// } = {
const person = {
  //This is the same as the above, but typescript can infer the type of the object from the values we assign to it
  name: "Max", //Key: Value pairs for the object, this is more optimal then explicitly defining the type of the object
  age: 30,
};

console.log(person.name);
