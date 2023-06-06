const example = new ExampleConstructor();
const instanceValue = example instanceof ExampleConstructor;

function ExampleConstructor() {}

console.log(`Value of exampleConstructor: ${ExampleConstructor.prototype}`);
console.log(typeof ExampleConstructor.prototype);

console.log(`Value of example: ${example}`);

console.log(`Value of instanceValue: ${instanceValue}`);
