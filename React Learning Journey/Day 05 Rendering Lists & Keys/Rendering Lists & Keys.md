# ⚛️ React Day 5: Rendering Lists & Keys
## 🔹 1. Rendering Lists in JSX
> In React, you use .map() to loop over an array and render UI dynamically.

### ✅ Example:
```jsx
const fruits = ["Apple", "Banana", "Orange"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

## 🔹 2. Why key is Important?
- Helps React identify which items changed
- Must be unique per item
- Prefer using a unique id if available

### ✅ Example with Object List:
```jsx
const users = [
  { id: 1, name: "Hatim" },
  { id: 2, name: "Aisha" },
  { id: 3, name: "Zain" }
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

#### 🧪 Practice Exercises:
1. Create a Cities component that renders a list of 5 city names.
2. Build a ProductsList component that takes an array of products and displays each title and price.
3. Create a TaskList component to render tasks with checkbox for each.
4. Add key using id in all object-based loops.
5. BONUS: Create a list of user cards (UserCard) with name and email.