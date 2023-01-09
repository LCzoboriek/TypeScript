// const person: {
//   name: string; //Key: Type Values for the object
//   age: number;
// } = {
const person: {
  name: string; //Key: Type Values for the object
  age: number;
  hobbies: string[];
  role: [number, string]; // This is a tuple, a tuple is an array with a fixed length and fixed types however you should explicitly define the types of the tuple
} = {
  //This is the same as the above, but typescript can infer the type of the object from the values we assign to it
  name: "Max", //Key: Value pairs for the object, this is more optimal then explicitly defining the type of the object
  age: 30,
  hobbies: ["Sport", "Cooking"],
  role: [2, "author"], // This is a tuple, a tuple is an array with a fixed length and fixed types however you should explicitly define the types of the tuple
};

let favouriteActivities: string[]; // This is how we define an array of strings explicitly
//person.role[1] = 10; // This is how we assign a value to a tuple, you can only assign values to a tuple in the order they are defined in the tuple, in this case this would cause an error
//person.role = [0, "admin", "user"]; // This causes an error as the third element is not defined in the tuple

favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // You can use the toUpperCase() method on strings as it is of type string array
  // console.log(hobby.map()); // !!! ERROR !!!
}
