// convert json to object

const jsonData = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonData);
console.log(jsonObject);

// convert object to json

const jsonString = JSON.stringify(jsonObject);
console.log(jsonString);



