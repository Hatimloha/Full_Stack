# One & Many commands in Mongoose:

## Example:
```js
db.users.insertMany([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
]);
```
This command inserts multiple documents into the "users" collection in MongoDB. Each document represents a user with a name and age. The `insertMany` method is used to add several documents at once, making it **efficient** for bulk inserts. 

## One Command:
```js
db.users.insertOne({ name: "David", age: 28 });
```
This command inserts a single document into the "users" collection in MongoDB. The `insertOne` method is used to add one document at a time. In this example, a user named David with an age of 28 is added to the collection.
