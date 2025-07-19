# Day 26 - Async Task — Wait, Then Resolve!

## 🧠 Concept
> Use setTimeout with a Promise to simulate a delay, then log something after a few seconds.

## 🔄 Real-World Use
> This is like simulating network delay or an animation wait before something happens.

## ✅ Output Behavior
> When you click a button, it waits for 3 seconds, then shows a message.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Wait Example</title>
  <style>
    body {
      font-family: Arial;
      text-align: center;
      margin-top: 100px;
    }
  </style>
</head>
<body>

  <h1>Async Wait Example</h1>
  <h2 id="output">Click the button</h2>
  <button onclick="showMessageAfterDelay()">Start</button>

  <script>
    function wait(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function showMessageAfterDelay(){
        document.getElementById("output").textContent = "Waiting......";
        await wait(3000);
        cument.getElementById("output").textContent = "Hello Print After 3 seconds"
    }
  </script>

</body>
</html>
```

# ⚙️ What's Happening?
- wait(ms) returns a Promise.
- await wait(3000) pauses the async function for 3 seconds.
- Message is updated after the delay.

