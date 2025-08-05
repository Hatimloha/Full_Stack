# ✅ React Day 7 – Handling Forms Continued (Final Part)
> Today wraps up basic forms with validation, reset, and multiple inputs handling.

## 📘 Topics Covered:
1. "onSubmit" Event on <form>
2. Handling Multiple Inputs with One "onChange"
3. Better Validation Patterns
4. Disable Submit until valid
5. Practice Exercises


### 1. ✅ onSubmit Event on <form>
> Instead of using a button's onClick, wrap inputs in <form> and use onSubmit.
```jsx
<form onSubmit={handleSubmit}>
  <input ... />
  <button type="submit">Submit</button>
</form>
```
> 🧠 Prevent default to stop page reload: e.preventDefault();

### 2. ✅ Handle Multiple Inputs Dynamically
> Use a single state and one handler:
```jsx
const [formData, setFormData] = useState({ name: "", email: "" });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
```

```jsx
<input name="name" onChange={handleChange} />
<input name="email" onChange={handleChange} />
```

### 3. ✅ Basic Form Validation
```js
const isValidEmail = (email) => email.includes("@") && email.includes(".");
Optionally:
```
```js
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

### 4. ✅ Disable Submit Until Valid
```jsx
<button disabled={!formData.name || !isValidEmail(formData.email)}>
  Submit
</button>
```

### 5. 🧪 Practice Exercises
- Build these components:
Task	Hint
1. Login Form	username + password
2. Newsletter Signup	Email validation
3. Feedback Box	textarea, min length
4. User Form with Select	select dropdown
5. Gender Radio Form	type="radio" options