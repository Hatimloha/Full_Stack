# ✅ React Day 6: Forms & Controlled Inputs
> React handles form inputs using controlled components, where form data is managed via useState.

### 🧱 Syntax:
```jsx
const [inputValue, setInputValue] = useState("");

<input 
  type="text" 
  value={inputValue} 
  onChange={(e) => setInputValue(e.target.value)} 
/>
```

## 🔍 Key Points:
- value is tied to state (inputValue)
- onChange updates state on every keystroke

## 💡 Why Use Controlled Inputs?
- Instant validation
- State-driven rendering
- Easier to reset or manipulate input values

### 💻 Examples:
1. Single Input Field
```jsx
const [name, setName] = useState("");

<input 
  type="text" 
  value={name} 
  onChange={(e) => setName(e.target.value)} 
/>
<p>Your name is: {name}</p>
```

2. Multiple Fields (Form)
```jsx
const [formData, setFormData] = useState({ name: "", email: "" });

<input 
  type="text" 
  name="name" 
  value={formData.name} 
  onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
/>

<input 
  type="email" 
  name="email" 
  value={formData.email} 
  onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}
/>
```

## 🛠️ Tasks for Day 6:
1. Create a component with a controlled input (name)
2. Create a form with name and email inputs
3. Show submitted data below the form
4. Add a reset button to clear inputs
5. BONUS: Add basic validation (e.g., email should contain @) 