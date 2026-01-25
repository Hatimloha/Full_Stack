# What is CRDU?
- C: Create
- R: Read
- D: Delete
- U: Update
> These are the basic operations we can perform on the data in the database.

# CRDU Operations in Mongoose
Mongoose provides several methods to perform CRDU operations on MongoDB collections. Below are examples of how to use these methods.

## Create
To create a new document in a collection, we use the `create()` method or instantiate a new model and save it.

```javascript
const newUser = new User({ name: 'John Doe', email: 'john@example.com' });
newUser.save()
  .then(user => console.log('User Created:', user))
  .catch(err => console.error(err));
```
## Read
To read documents from a collection, we use the `find()` or `findOne()` methods.

```javascript
User.find({ name: 'John Doe' })
  .then(users => console.log('Users Found:', users))
  .catch(err => console.error(err));
```
## Delete
To delete documents from a collection, we use the `deleteOne()` or `deleteMany()` methods.

```javascript
User.deleteOne({ email: 'john@example.com' })
    .then(result => console.log('User Deleted:', result))
    .catch(err => console.error(err));
    ```
## Update
To update documents in a collection, we use the `updateOne()` or `updateMany()` methods.

```javascript  
User.updateOne({ email: 'john@example.com' }, { name: 'Jane Doe' })
  .then(result => console.log('User Updated:', result))
  .catch(err => console.error(err));
``` 
These methods allow us to perform the basic CRDU operations on our MongoDB collections using Mongoose.
