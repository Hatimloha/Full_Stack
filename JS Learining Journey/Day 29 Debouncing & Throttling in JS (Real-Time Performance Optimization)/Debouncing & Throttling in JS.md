# ✅ JavaScript Day 29: Debouncing & Throttling in JS (Real-Time Performance Optimization)
> These two techniques are essential for improving performance in high-frequency events like scroll, resize, keyup, mousemove, etc.

## 🎯 Topics Covered:
- What is Debouncing?
- What is Throttling?
- When to use each?
- Real-world examples (search bars, window resizing, button click protection)

### 🔍 1. What is Debouncing?
> Debouncing ensures that a function is not called again until a specified delay has passed after the last time it was invoked.

#### ✅ Use Case:
> Typing in a search bar — fetch API results after user stops typing.
```js
let debounceTimer;
function debounceSearch(callback, delay){
    return function(){
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(callback, delay);
    };
};
// Usage
function fetchSearchResult(){
    console.log("fetching search result....!")
};

const debouncedSearch = debounceSearch(fetchSearchResults, 500);
document.getElementById("searchInput").addEventListener("keyup", debouncedSearch);
```
### 🚀 2. What is Throttling?
> Throttling ensures that a function is only called once per specified time, even if triggered multiple times.

#### ✅ Use Case:
> Tracking scroll position without firing an event 1000 times per second.
```js
function throttle(callback, delay) {
  let last = 0;
  return function () {
    let now = Date.now();
    if (now - last >= delay) {
      last = now;
      callback();
    }
  };
}

// Usage
function logScroll() {
  console.log("Scrolling...");
}

window.addEventListener("scroll", throttle(logScroll, 300));
```
### 🤔 When to Use:
- Use Case	        | Use
- API Search,       | Input Validation	Debounce
- Scroll Position, | Resize	Throttle

#### 🧪 Mini Practice:
> Add this input box to test debounce:
```html
<input type="text" id="searchInput" placeholder="Type to search..." />
```

#### ✅ Summary:
- Debounce waits until no action happens for a delay.
- Throttle limits how frequently a function is triggered.
- Both help optimize performance and reduce API calls.